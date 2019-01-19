# file2html
[![Build Status](https://travis-ci.org/file2html/file2html.svg?branch=master)](https://travis-ci.org/file2html/file2html)[![npm](https://img.shields.io/npm/dm/file2html.svg)](https://www.npmjs.com/package/file2html)
[![npm](https://img.shields.io/npm/v/file2html.svg)](https://www.npmjs.com/package/file2html)
[![npm](https://img.shields.io/npm/l/file2html.svg)](https://www.npmjs.com/package/file2html)
[![Coverage Status](https://coveralls.io/repos/github/file2html/file2html/badge.svg?branch=master)](https://coveralls.io/github/file2html/file2html?branch=master)

> JS convertor of files to HTML and CSS code

## Requirements
* [Promise API](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise), [polyfill](https://github.com/lahmatiy/es6-promise-polyfill)
* [Encoding API](https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API), [polyfill](https://github.com/inexorabletash/text-encoding)
* [Object.assign](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), [polyfill](https://github.com/ljharb/object.assign)

## Supported formats
- [x] Text                [file2html-text](https://github.com/file2html/file2html-text)                 (.txt)
- [x] Images              [file2html-image](https://github.com/file2html/file2html-image)               (.png, .jpg, .gif, .svg, .ico, .wbmp)
- [x] OOXML Documents     [file2html-ooxml](https://github.com/file2html/file2html-ooxml)               (.docx)
- [ ] OOXML Presentations (.pptx)
- [ ] OOXML Spreadsheets  (.xlsx)
- [x] ODF Text Files      [file2html-odf](https://github.com/file2html/file2html-odf)                   (.odt)
- [x] DSV                 [file2html-dsv](https://github.com/file2html/file2html-dsv)                   (.csv, .tsv)
- [x] FictionBook         [file2html-fiction-book](https://github.com/file2html/file2html-fiction-book) (.fb2)
- [x] EPUB                [file2html-epub](https://github.com/file2html/file2html-epub)                 (.epub)
- [ ] DjVu                (.djvu, .djv)
- [ ] RTF                 (.rtf)
- [ ] WCBFF               (.doc)

## Usage
### Installation

```shell
> npm i file2html
```

### Installation of required engines for each file type:

```shell
> npm i file2html-text file2html-ooxml file2html-image 
```

Check [supported formats](#supported-formats) to decide which engines you need.

### Configuration

```js
import * as file2html from 'file2html';
import TextReader from 'file2html-text';
import OOXMLReader from 'file2html-ooxml';
import ImageReader from 'file2html-image';

file2html.config({
    readers: [
        TextReader,
        OOXMLReader,
        ImageReader
    ]
});
```

### File reading

```js
file2html.read({
    fileBuffer, // ArrayBuffer
    meta // file2html.FileMetaInformation
}).then((file) => {
    // file is an instance of file2html.File type 
    const {styles, content} = file.getData();    
    
    // "render" a file content with styles
    document.body.innerHTML = styles + content;
});
```

#### FileMetaInformation

```js
    {
        fileType: number; // optional
        mimeType: string; // optional
        name: string; // optional
        size: number; // optional
        creator: string; // optional
        createdAt: string; // optional
        modifiedAt: string; // optional
    }
```

#### File

```js
    {
        getMeta () {
            // returns object of file2html.FileMetaInformation    
        }
    
        getData ()  {
            // returns object of file2html.FileData
        }
    }
```

#### FileData

```js
    {
        meta: file2html.FileMetaInformation;
        styles: string; // css styles as a string
        content: string; // html markup as a string
    }
```

## Showcase
### StormFiles
Browser extension, file viewer:
  * [Chrome extension](https://chrome.google.com/webstore/detail/stormfiles/ickghndjocahgacnfaakbmbokmfneahd)
  * [Firefox extension](https://addons.mozilla.org/firefox/addon/stormfiles)
