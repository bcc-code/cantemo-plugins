git add --all
git commit -m "wip"
git push origin bugfix
ssh root@10.12.128.19 << HERE
    cd /root/cantemo-plugins
    git pull origin main
    sh install.sh
HERE