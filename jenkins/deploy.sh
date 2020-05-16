#!/usr/bin/env sh

echo '启动node服务'
set -x
npm start & 
sleep 1
echo $! > .pidfil
set +x
