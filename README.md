### Hexlet tests and linter status:
[![Actions Status](https://github.com/SemyonSt/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/SemyonSt/frontend-project-lvl2/actions)
<a href="https://codeclimate.com/github/SemyonSt/frontend-project-lvl2/maintainability"><img src="https://api.codeclimate.com/v1/badges/211e83db343ddd400ff7/maintainability" /></a>
<a href="https://codeclimate.com/github/SemyonSt/frontend-project-lvl2/test_coverage"><img src="https://api.codeclimate.com/v1/badges/211e83db343ddd400ff7/test_coverage" /></a>
[![Node_CI](https://github.com/SemyonSt/frontend-project-lvl2/actions/workflows/LinterPush.yml/badge.svg)](https://github.com/SemyonSt/frontend-project-lvl2/actions/workflows/LinterPush.yml)


Programm to compare two files.   
Supported file formats: json, yaml.  
Available formats to display differences: stylish(default format), plain, json.  

**Install**

`make install`

### compare json and yaml files:  
gendiff file1.json file2.json

gendiff file1.yaml file2.yaml 
[![asciicast](https://asciinema.org/a/LfaHA9bLAGafdMCn6zIiHkSee.svg)](https://asciinema.org/a/LfaHA9bLAGafdMCn6zIiHkSee)

### get default output format (stylish):  
gendiff file1.json file2.json 

gendiff file1.yaml file2.yaml 
[![asciicast](https://asciinema.org/a/UinkDwqtMeKA1T3QnqeMYcoU4.svg)](https://asciinema.org/a/UinkDwqtMeKA1T3QnqeMYcoU4)

### get plain output format:  
gendiff --format plain  file1.yaml file2.yaml 
[![asciicast](https://asciinema.org/a/rS5Sn4vRf6kuqFEWzg6M4CFjw.svg)](https://asciinema.org/a/rS5Sn4vRf6kuqFEWzg6M4CFjw)

### get json output format:  
gendiff --format json file1.yaml file2.yaml 
[![asciicast](https://asciinema.org/a/jS3jBzLIydG2ypbbO1zbhx0Oa.svg)](https://asciinema.org/a/jS3jBzLIydG2ypbbO1zbhx0Oa)

