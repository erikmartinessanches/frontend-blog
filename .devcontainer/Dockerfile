# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.224.2/containers/alpine/.devcontainer/base.Dockerfile

# [Choice] Alpine version: 3.14, 3.13, 3.12, 3.11
ARG VARIANT="3.15"
FROM mcr.microsoft.com/vscode/devcontainers/base:0-alpine-${VARIANT}



# ** [Optional] Uncomment this section to install additional packages. **
# RUN apk update \
#     && apk add --no-cache <your-package-list-here>


# Advisable to create a non-root user.
# See https://sysdig.com/blog/dockerfile-best-practices/
#
# -g can be very useful to specify - at least equal to the username. This
# makes the user distinguishable, e.g. when they are listed at the login 
# screen of a display manager. 
# See https://wiki.alpinelinux.org/wiki/Setting_up_a_new_user
RUN adduser -D -g "admin" admin

RUN mkdir -p /myapp

RUN chown -R admin /myapp

#RUN chmod -R 777 /home/admin/myapp

# chown -R admin /home/admin/repos

# [Choice] Node.js version: 16, 14, 12
# ARG VARIANT="16-buster"
#FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# Combining update and upgrade into one command
RUN apk -U upgrade

# Install desired software, multiple packages in one command is ok.
RUN apk add nodejs

RUN apk add yarn

# Copy application files here...

#I may need to expose a port eventually...

#ENV APP_TEMP_DATA=/tmp
#ENTRYPOINT [ "/home/admin/myapp" ]
USER admin
ENV APP_TMP_DATA=/tmp
# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
# RUN su node -c "npm install -g <your-package-list -here>"