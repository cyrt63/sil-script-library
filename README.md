# SIL Script Library
> Real business use cases... pre-scripted!

This repository contains [Simple Issue Language (SIL)](https://confluence.cprime.io/display/SIL)
sample scripts for use within The Power Portfolio suite of Atlassian
Marketplace apps. These apps include:
* [Power Scripts for JIRA](https://marketplace.atlassian.com/plugins/com.keplerrominfo.jira.plugins.jjupin/server/overview)
* [Power Actions for JIRA](https://marketplace.atlassian.com/plugins/com.keplerrominfo.jira.plugins.blitz-actions/server/overview)
* [Power Custom Fields](https://marketplace.atlassian.com/plugins/com.keplerrominfo.jira.plugins.keplercf/server/overview)
* [Power Custom Fields PRO](https://marketplace.atlassian.com/plugins/com.keplerrominfo.jira.plugins.keplercf-pro/server/overview)
* [Power Database Fields](https://marketplace.atlassian.com/plugins/com.keplerrominfo.jira.plugins.databasecf/server/overview)

The Power Portfolio is currently only available on Jira Server or Data Center
deployments. Simple Issue Language was written exclusively for Jira and your
SIL scripts will always be forward, backward, and cross-compatible across Jira
versions.

## Prerequisites

* [katl-commons](https://marketplace.atlassian.com/plugins/com.keplerrominfo.jira.plugins.commons/server/overview)
is required to enable the SIL Manager on any Jira Server or Data Center
installation. It can be installed separately (for free), but is included and
installed with download of any app within The Power Portfolio
* To actually _execute_ SIL scripts, you must have at least one of The Power
Portfolio apps installed. This repository is currently tailored with
[Power Scripts for JIRA](https://marketplace.atlassian.com/plugins/com.keplerrominfo.jira.plugins.jjupin/server/overview)
in mind.

## Getting started

### Cloning this repo onto Jira's application server

This example demonstrates how to download these script files onto your Jira
server from the command line. It assumes a Linux deployment with Jira
installed in default directories with default user:group as defined in
[Atlassian's documentation](https://confluence.atlassian.com/adminjiraserver071/installing-jira-applications-on-linux-802592173.html).

```shell
>> git clone https://bitbucket.cprime.io/scm/cap/sil-script-library.git
>> sudo cp -a sil-script-library/. /var/atlassian/application-data/jira/silprograms/
>> sudo chown -R jira:jira /var/atlassian/application-data/jira/silprograms
>> sudo chmod 640 /var/atlassian/application-data/jira/silprograms/*
```

Please note that this operation *will overwrite* any directories or files
that you may already have on your application server if identical names are
found. Continue reading for a more manual, selective approach.

### Copy and paste

The brute force method will work in a pinch if you want to be selective about
which scripts to include in your instance and/or don't want to worry about
the potential of overwriting any scripts you may already have in your instance.

## Further documentation

* [Simple Issue Language](https://confluence.cprime.io/display/SIL)
* [Power Scripts for JIRA](https://confluence.cprime.io/display/JJUPIN)
* [Power Actions for JIRA](https://confluence.cprime.io/display/KBA)
* [Power Custom Fields](https://confluence.cprime.io/display/KCF)
* [Power Custom Fields PRO](https://confluence.cprime.io/display/KCFPRO)
* [Power Database Fields](https://confluence.cprime.io/display/DBCF)
* Many of these examples were lifted from the [Tutorials & Recipes](https://confluence.cprime.io/display/TR) documentation.

## Contributing

If you've solved a unique business request utilizing SIL in conjunction with
any app from The Power Portfolio, we'd love to hear from you! We're willing to
bet that many others in the Atlassian Community would love to hear from you as
well. To showcase your script, please [create a discussion topic](https://community.atlassian.com/t5/forums/postpage/choose-node/true/interaction-style/forum?add-tags=sil-scripts-library)
and be sure to include:

1. The request. What business need were you trying to solve?
2. The app. Which Power Suite app(s) did you use to solve the need?
3. The script. Please use the code editor in your discussion.
4. The tag. Please tag the discussion with ```shell sil-script-library ```

If the business case seems common enough, we will be happy to upload it to
this repository so that others can benefit from your hard work. You will
receive full attribution in the script comments, and we'll be happy to give
you an upvote to bolster your community cred!

## Licensing

This project is unlicensed and is free for all to use and distribute in any
manner that you wish. We ask only that you attribute the source material to
[cPrime, Inc.](https://www.cprime.com/), and specifically this repository,
if any examples included here are reproduced in totality, without modification,
in a public forum (blog post, marketing material, and the like).
