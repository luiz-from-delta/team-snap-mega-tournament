#!/bin/zsh

cd ../backend

RB_CURRENT_VERSION="2.7.1"
RB_TARGET_VERSION="3.0.0"

rbenv install $RB_TARGET_VERSION
rbenv local $RB_TARGET_VERSION

REPLACE_STR="s/$RB_CURRENT_VERSION/$RB_TARGET_VERSION/"

DCR_FILE="./Dockerfile"
GEM_FILE="./Gemfile"
RBV_FILE="./.ruby-version"

perl -pi.bak -e $REPLACE_STR $DCR_FILE $GEM_FILE $RBV_FILE

rm $(ls -a | grep ".bak$")

bundle update

cd ../.sh