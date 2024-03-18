set shell := ["powershell.exe", "-c"]

run :
  nx serve api
  nx serve web
  nx serve dashboard
