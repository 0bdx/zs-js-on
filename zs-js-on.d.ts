export { zsJsOn as default };
/**
 * https://www.npmjs.com/package/@zs-/js-on
 * @version 0.0.1
 * @license Copyright (c) 2023 0bdx <0@0bdx.com> (0bdx.com)
 * SPDX-License-Identifier: MIT
 */
/** ### Adds the `zs-js-on` class to the `<HTML>` element if JS is running.
 *
 * If `zsJsOn()` is called in `<BODY>`, you can pass `document.body.parentNode`
 * as the first argument, which may be slightly faster.
 *
 * If `zsJsOn()` is called in `<HEAD>`, pass `document.documentElement` as the
 * first argument, because `document.body.parentNode` isn’t available there.
 *
 * Live examples:
 * - <https://0bdx.com/zs-js-on/examples/example-1.html>
 * - <https://0bdx.com/zs-js-on/examples/example-2.html>
 *
 * @example
 *                                                                 !function(
 *A,C,c,S,h,a,b,e,o){o=h[C];if(!o)return h[C]=A;o=S+o+S;e=o.indexOf(A);a=o[c](e
 *+A.length);b=o[c](e-1);if(e<0||a!=S||b!=S)h[C]+=S+A}('zs-js-on','className',
 *'charAt',' ',document.documentElement)//0bdx.com/zs-js-on#0.0.1
 *
 * @param {'zs-js-on'} ADDED_CLASS
 *    The class name to add if JS is running - the literal string `"zs-js-on"`.
 * @param {'className'} CLASS_NAME
 *    The literal string `"className"`.
 * @param {'charAt'} CHAR_AT
 *    The literal string `"charAt"`.
 * @param {' '} SPACE
 *    The literal string `" "`.
 * @param {HTMLHtmlElement} htmlElement
 *    The page's `<HTML>` element, eg using `document.documentElement`.
 */
declare function zsJsOn(ADDED_CLASS: 'zs-js-on', CLASS_NAME: 'className', CHAR_AT: 'charAt', SPACE: ' ', htmlElement: HTMLHtmlElement, after: any, before: any, existingPos: any, oldClassName: any): "zs-js-on";
