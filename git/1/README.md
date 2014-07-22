##Work with two remote repos


git clone https://github.com/KrIsHnA-Revoked/mirror.git

cd mirror/

remote -v

```
origin	https://github.com/KrIsHnA-Revoked/mirror.git (fetch)
origin	https://github.com/KrIsHnA-Revoked/mirror.git (push)
```


git remote add midhun https://github.com/midhunanew/mirror.git

git remote -v

```
midhun	https://github.com/midhunanew/mirror.git (fetch)
midhun	https://github.com/midhunanew/mirror.git (push)
origin	https://github.com/KrIsHnA-Revoked/mirror.git (fetch)
origin	https://github.com/KrIsHnA-Revoked/mirror.git (push)
```

git remote rename origin krishna

git remote -v

```
krishna	https://github.com/KrIsHnA-Revoked/mirror.git (fetch)
krishna	https://github.com/KrIsHnA-Revoked/mirror.git (push)
midhun	https://github.com/midhunanew/mirror.git (fetch)
midhun	https://github.com/midhunanew/mirror.git (push)
```

