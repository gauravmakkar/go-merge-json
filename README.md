# go-merge-json
The Node based utility used to merge multiple json files into one.

## Getting Started
```
npm install go-merge-json -g
```

## Usage
```
go-merge-json <first-json-file> <second-json-file>
```
## Example
```
go-merge-json test/test.json test/new.json
```
The command will update *test.json* file after merging with *new.json*
## Options
*create-backup*
```
go-merge-json test/test.json test/new.json --create-backup
```
The command will create a backup file for test/test.json before updating it.



