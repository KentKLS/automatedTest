#!/bin/bash

resultFile=$(pwd)/testResult.md
help=false
while getopts ":m:s:f:h" flag; do
    case "${flag}" in
        f) resultFile=${OPTARG};;
        m) mod=${OPTARG};;
        s) specificFile=${OPTARG};;
        h) help=true ;;
    esac
done
if [[ "$help" == true ]]; then
echo 'the launchTestScript run a Script that run all the tests for the 2 projects (back(laravel) and front(VueJS)) of the test module we are currently in and write the output of the test in a file, this script accept 3 options '
echo "          -m dev              | During the front end part of the test it opens the cypress window so that you can manually run the front end tests"
echo "          -s /route/to/file   | Run the front end part of the test (cypress) only for the test file you specify "
echo "          -f /route/to/file   | To specify the output file, by default the output file will be testResult.md located in the present working directory"
echo "          -h                  | To display the help"
exit 1
fi

    cd ~/automatedTest/conduit-backend-tests
    php artisan migrate:fresh --seed
    php artisan test --without-tty --colors=never | tee $resultFile
    php artisan migrate:fresh --seed
    php artisan serve --host=127.0.0.1:8000&
    cd ~/automatedTest/vue3-realworld-example-app 
    npm run build
    npm run serve&


if [[ "$mod" == "dev" ]]; then

    node_modules/.bin/cypress open --browser chrome --e2e -c baseUrl=http://localhost:4137 | tee -a $resultFile
elif [[ "$specificFile" != "" ]]; then

    node_modules/.bin/cypress run --e2e --spec $specificFile -c baseUrl=http://localhost:4137 | tee -a $resultFile
else

    node_modules/.bin/cypress run --e2e -c baseUrl=http://localhost:4137 | tee -a $resultFile
fi
