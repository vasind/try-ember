import Component from '@ember/component';
import {
  computed
} from '@ember/object';
import { htmlSafe } from '@ember/string';
//import showdown from 'showdown';
import markdown from 'markdown-it';
import highlightjs from 'markdown-it-highlightjs';

export default Component.extend({
  releaseText: computed('propertyToBeWatched', {
    get() {
      //var converter = new showdown.Converter();
      // var md = '[**Showdown**](http://www.showdownjs.com) is *great*\n' +
      //   'because:\n\n' +
      //   ' - it\'s easy to use\n' +
      //   ' - it\'s extensible\n' +
      //   ' - works in the server and in the browser';
      var md = "| Status  | Type  | Environment Change | Blue/Green Deployment |  Ticket |\r\n| :---: | :---: | :---: | :--: | :--: |\r\n| Ready/Hold/WIP | Feature/Bug/Tooling/Refactor/Hot-fix | Yes/No | Yes/No | [Link](<https://google.com>) |\r\n\r\n> ⚠️ NOTE: use notes like this to emphasize something about the PR.\r\n\r\n## Problem\r\n\r\n_What problem are you trying to solve?_\r\n\r\n## Solution\r\n\r\n_How did you solve the problem?_\r\n\r\n## Before & After Screenshots\r\n\r\n**BEFORE**:\r\n[insert screenshot here]\r\n\r\n**AFTER**:\r\n[insert screenshot here]\r\n\r\n## Other changes (e.g. bug fixes, small refactors)\r\n\r\n_Add Yes/No as response. If you've refactored some existing behaviour as part of your PR, please list it down here._\r\n\r\n## Impact Areas (notes for QA)\r\n\r\n_Please give a detailed description of all the impact areas caused by the code change (including refactors) in this PR_\r\n\r\n## Deploy Notes\r\n\r\n_Notes regarding deployment of the contained body of work. These should note any\r\nnew dependencies, new scripts, etc._\r\n\r\n**Environment Changes**\r\n\r\n- [ ] Changes / additions to `local_environment.js`\r\n- [ ] New Dependency or Version update of existing dependency\r\n\r\n> 👆 check whatever necessary and keep only the relevant sections in the bottom 👇🏽\r\n\r\n**Changes / additions to local_environment.js**\r\n\r\n_List the changes to local_environment.js you are introducing as part of this PR_\r\n\r\n```\r\n  omnibar: {\r\n    region: \"us\",\r\n    product: \"freshchat\"\r\n  }\r\n```\r\n\r\n**New dependencies**\r\n\r\n_Any third party dependencies you are adding as part of this PR. It can be link to NPM page or link to the blog that you've referred to_\r\n\r\nName of the dependency - `dependency` - [Link](<link to the dependency NPM page / blog>)\r\n\r\nVersion - `0.0.0`\r\n\r\n## Deprecations\r\n\r\n_List down the files, folders, dependencies that are deprecated or removed in this PR_\r\n\r\n## Prototypes / UX Designs\r\n\r\n_Copy the invision app links that are created by the design team for this PR_\r\n\r\n## Build Pipeline\r\n\r\n_List down the build tasks pipeline change in (grunt, ember) that are added in this PR_\r\n\r\n## Miscellaneous information\r\n\r\n_Information is wealth. Kindly add any extra info you want PR reviewers/deployers know_\r\n";
      //return converter.makeHtml(md);
      let mk = new markdown({
        // html: true,
        // linkify: true,
        // typographer: true,
        // xhtmlOut: true,
        // langPrefix: 'language-',
        // breaks: true
      }).use(highlightjs);
      return htmlSafe(mk.render(md));
      // let ptag = document.createElement('p');
      // ptag.innerHTML = "| Status  | Type  | Environment Change | Blue/Green Deployment |  Ticket |\r\n| :---: | :---: | :---: | :--: | :--: |\r\n| Ready/Hold/WIP | Feature/Bug/Tooling/Refactor/Hot-fix | Yes/No | Yes/No | [Link](<Ticket link here>) |\r\n\r\n> ⚠️ NOTE: use notes like this to emphasize something about the PR.\r\n\r\n## Problem\r\n\r\n_What problem are you trying to solve?_\r\n\r\n## Solution\r\n\r\n_How did you solve the problem?_\r\n\r\n## Before & After Screenshots\r\n\r\n**BEFORE**:\r\n[insert screenshot here]\r\n\r\n**AFTER**:\r\n[insert screenshot here]\r\n\r\n## Other changes (e.g. bug fixes, small refactors)\r\n\r\n_Add Yes/No as response. If you've refactored some existing behaviour as part of your PR, please list it down here._\r\n\r\n## Impact Areas (notes for QA)\r\n\r\n_Please give a detailed description of all the impact areas caused by the code change (including refactors) in this PR_\r\n\r\n## Deploy Notes\r\n\r\n_Notes regarding deployment of the contained body of work. These should note any\r\nnew dependencies, new scripts, etc._\r\n\r\n**Environment Changes**\r\n\r\n- [ ] Changes / additions to `local_environment.js`\r\n- [ ] New Dependency or Version update of existing dependency\r\n\r\n> 👆 check whatever necessary and keep only the relevant sections in the bottom 👇🏽\r\n\r\n**Changes / additions to local_environment.js**\r\n\r\n_List the changes to local_environment.js you are introducing as part of this PR_\r\n\r\n```\r\n  omnibar: {\r\n    region: \"us\",\r\n    product: \"freshchat\"\r\n  }\r\n```\r\n\r\n**New dependencies**\r\n\r\n_Any third party dependencies you are adding as part of this PR. It can be link to NPM page or link to the blog that you've referred to_\r\n\r\nName of the dependency - `dependency` - [Link](<link to the dependency NPM page / blog>)\r\n\r\nVersion - `0.0.0`\r\n\r\n## Deprecations\r\n\r\n_List down the files, folders, dependencies that are deprecated or removed in this PR_\r\n\r\n## Prototypes / UX Designs\r\n\r\n_Copy the invision app links that are created by the design team for this PR_\r\n\r\n## Build Pipeline\r\n\r\n_List down the build tasks pipeline change in (grunt, ember) that are added in this PR_\r\n\r\n## Miscellaneous information\r\n\r\n_Information is wealth. Kindly add any extra info you want PR reviewers/deployers know_\r\n";
      // return ptag.innerHTML;
    }
  })
});
