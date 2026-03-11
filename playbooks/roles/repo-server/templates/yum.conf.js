
Alias /repo "{{path_my_repo}}"
<Directory "{{path_my_repo}}">
  Options +Indexes +FollowSymLinks
  Require all granted
</Directory>
<Location /repo>
  SetHandler None
</Location>

