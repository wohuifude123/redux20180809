#!/bin/bash

while read line;do
    eval "$line"
done < environment-variable.ini
echo $UNIVER_USER_LOGIN
echo $UNIVER_SEARCH_ORDINARY
echo $UNIVER_SEARCH_LABEL
echo $UNIVER_SEARCH_VIDEO
echo $UNIVER_TASK_MANAGER
echo $UNIVER_PROJECR_URL
echo $UNIVER_PROJECR_PORT

if [[ $UNIVER_USER_LOGIN == $(sed '/^UNIVER_USER_LOGIN=/!d;s/.*=//' /etc/profile) ]];then
    echo ${UNIVER_USER_LOGIN}
else
    echo '不一致,需要修改成配置文件中的参数'
    # echo "export UNIVER_USER_LOGIN='xxx'" >> /etc/profile
    grep 'UNIVER_USER_LOGIN' environment-variable.ini >> /etc/profile
fi

if [[ $UNIVER_SEARCH_ORDINARY == $(sed '/^UNIVER_SEARCH_ORDINARY=/!d;s/.*=//' /etc/profile) ]];then
    echo ${UNIVER_SEARCH_ORDINARY}
else
    echo '不一致,需要修改成配置文件中的参数'
    # echo "export UNIVER_USER_LOGIN='xxx'" >> /etc/profile
    grep 'UNIVER_SEARCH_ORDINARY' environment-variable.ini >> /etc/profile
fi

if [[ $UNIVER_SEARCH_LABEL == $(sed '/^UNIVER_SEARCH_LABEL=/!d;s/.*=//' /etc/profile) ]];then
    echo ${UNIVER_SEARCH_LABEL}
else
    echo '不一致,需要修改成配置文件中的参数'
    # echo "export UNIVER_USER_LOGIN='xxx'" >> /etc/profile
    grep 'UNIVER_SEARCH_LABEL' environment-variable.ini >> /etc/profile
fi

if [[ $UNIVER_SEARCH_VIDEO == $(sed '/^UNIVER_SEARCH_VIDEO=/!d;s/.*=//' /etc/profile) ]];then
    echo ${UNIVER_SEARCH_VIDEO}
else
    echo '不一致,需要修改成配置文件中的参数'
    # echo "export UNIVER_USER_LOGIN='xxx'" >> /etc/profile
    grep 'UNIVER_SEARCH_VIDEO' environment-variable.ini >> /etc/profile
fi

if [[ $UNIVER_TASK_MANAGER == $(sed '/^UNIVER_TASK_MANAGER=/!d;s/.*=//' /etc/profile) ]];then
    echo ${UNIVER_TASK_MANAGER}
else
    echo '不一致,需要修改成配置文件中的参数'
    # echo "export UNIVER_USER_LOGIN='xxx'" >> /etc/profile
    grep 'UNIVER_TASK_MANAGER' environment-variable.ini >> /etc/profile
fi

if [[ $UNIVER_PROJECR_URL == $(sed '/^UNIVER_PROJECR_URL=/!d;s/.*=//' /etc/profile) ]];then
    echo ${UNIVER_PROJECR_URL}
else
    echo '不一致,需要修改成配置文件中的参数'
    # echo "export UNIVER_USER_LOGIN='xxx'" >> /etc/profile
    grep 'UNIVER_PROJECR_URL' environment-variable.ini >> /etc/profile
fi

if [[ $UNIVER_PROJECR_PORT == $(sed '/^UNIVER_PROJECR_PORT=/!d;s/.*=//' /etc/profile) ]];then
    echo ${UNIVER_PROJECR_PORT}
else
    echo '不一致,需要修改成配置文件中的参数'
    # echo "export UNIVER_USER_LOGIN='xxx'" >> /etc/profile
    grep 'UNIVER_PROJECR_PORT' environment-variable.ini >> /etc/profile
fi

source /etc/profile


# sed -i '' '/UNIVER_PROJECR_PORT/s/xxx/yyy/g' /etc/profile # 替换值

:<<!
if [ $UNIVER_SEARCH_VIDEO ]; then
    echo ${UNIVER_SEARCH_VIDEO}
else
    echo "找不到"
fi
!

:<<!
if [ $UNIVER_SEARCH_LABEL ]; then
    echo ${UNIVER_SEARCH_LABEL}
else
    # echo "export UNIVER_USER_LOGIN='xxx'" >> /etc/profile
    grep 'UNIVER_SEARCH_LABEL' environment-variable.ini >> /etc/profile
fi
!