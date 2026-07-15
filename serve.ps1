$port = 8765
$root = $PSScriptRoot
$mime = @{
  '.html' = 'text/html; charset=utf-8'
  '.css'  = 'text/css'
  '.js'   = 'application/javascript'
  '.json' = 'application/json'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://127.0.0.1:$port/")
$listener.Start()
Write-Output "LISTENING http://127.0.0.1:$port/"

while ($true) {
  $ctx = $listener.GetContext()
  $path = [System.Uri]::UnescapeDataString($ctx.Request.Url.LocalPath)
  if ($path -eq '/') { $path = '/index.html' }
  $file = Join-Path $root ($path.TrimStart('/'))

  if (Test-Path $file -PathType Leaf) {
    $ext = [IO.Path]::GetExtension($file)
    if ($mime.ContainsKey($ext)) {
      $ctx.Response.ContentType = $mime[$ext]
    } else {
      $ctx.Response.ContentType = 'application/octet-stream'
    }
    $bytes = [IO.File]::ReadAllBytes($file)
    $ctx.Response.StatusCode = 200
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } else {
    $ctx.Response.StatusCode = 404
  }
  $ctx.Response.Close()
}
