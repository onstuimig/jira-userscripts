// ==UserScript==
// @name         JIRA Reset header styles
// @description  Reset the header colors to default
// @namespace    https://github.com/onstuimig/jira-userscripts
// @version      1.0.0
// @author       Onstuimig - Jeroen Rothbauer
// @match        https://onstuimig.atlassian.net/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC1lBMVEX///8MYt0adO8kgfwlhP8QaOIif/omhP8mhP8KYNkIXdgcePImhP4mhP8FWtQQaOImhP8mhP8GW9UDVtAmhP8KYNoAU80mhP4GWtQmhP4GWtQAU80FWtQmhP4NZN4IXdcCVM4mhP8LYdsFWdMTa+YOZd8IXdcmhP4RaeMMYtwUbOcPZuEadfAXcOsTauUlhP4adO8Wb+odePMZdO8if/ogfPcdePMjgPsgffglg/4kgv0MY90kgv0KX9kLYdslg/4mhP8NZN4OZd8mhP8RaOMRaeMlg/8mhP8UbOcVbegmhP8mhP8YcewXcewbdvEbdfAfe/YeefQmhP8mhP8if/ohfvkhffclg/4mhP8lg/4kgv0mhP8mg/8mg/4mhP8kgfwlg/4mhP8mhP8ifvkhffgifvkmhP8mhP8mhP4eevUeevUlhP4bd/EbdfAZc+0XcesWb+kUbeclhP4Xb+oTa+UQaOIlg/4QZ+ENY90lg/4OZN4JX9klhP4kgfwNY90mhP4mhP8kgfwlg/4gfPcjf/omg/4cd/IgfPcmhP4Zc+4dePMWb+kade8SauQXcescd/EPZuAVbegLYdsRaeMIXNYPZuAEWNIMYtwBU80JXdgRaOMAU80IXNcAU80HW9YAU80IXNYPZOAHXNYOZN8CVdAPZuEbdvEJXtkPZeAhfvkRaeMif/oZc+0RaeMmhP8lg/4gfPcPZuAAUswdePMDVtAkgv0LYNsRaOMUbegCVc8BU80WcOoGWtQEWNIUbecJX9kHXNYQZ+INZN4LYdsKX9oPZeADVtEUbOcSauUbdvEXcewWb+oZc+4Ycewfe/YfevUQaOIif/ogffgHW9UbdfAIXdcgfPYkgfwifvkcd/IeefQZc+0Vb+kXcesSauQUbOYOZd8QZ+ELYNoMY90JXtgTbOYJXdcbdvAFWdMGWdMEV9ECVM4KX9kVbugBVM4NY94eevX///9blst/AAAArnRSTlMBA2thA3P792EDdfn1A3f79WVx+10D+2V1YXP5eV0Dd/tjdfsDc/lfeftx+wN3+fV3+3H5A3n7c/tz+ff381NJ7/NZUfFZA0/zVUvx81vxVfNZSfPzWQNBq/lT+5+n+V37nT0DY/XtO01j9U9f9WX3X/dNA2P1S2P1UV31Sfv7T03zX/VfUfdjSfVd9WH1YQP3XfVj81/1YfVjA/dd9WPzXwNfA/X182ED9V9NWQMmaUgbAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+UJDgonCckcusQAAAN5SURBVFjDpZb5QwxhGMdf56xjmUgrhMh95L5piaJ1lvu+Rc4QEbnlvm/lvnmnJovIEaJIjiI3OTtcf4KZ3Z2dd2aePWZ7fv3O9/M+7/d955lByG4VK16iJCpKlSpNaYpgL1O2HMblNVqXARUqMhhj2s1Vf6XK8Zgv2t0le5UKHgkMNhN0ruyiqgebiC1Fe6pfv1p19rIRWwmqk6zhwbJXGCsAUzqV+XF+9iomivJSYa9ZqzbnZ6+RAEx7O7+LOnWTrnOAG1hGcNLuU69+8k2ecAvLCA2cAzRsdPuOiZDCyAiUU3eycZO798yE+3IAphz30LRZ85RUC+GBUQ7Avg6TbNHyYZqVkK4AOEyyVetHj0VCAqMk+NrbRZu27dIznvCEBBMhOVMJsJtk+w5PE9MziB6eMRDBVg/ajp2ev5ASsrIBgM076U0zRjnh5SuYAPm9aIyVhM5dQILyzdLqKF4RCEKSXbv56SECpZhRGsqsSHvo3gMhf5ggnfZaT1pQSELPXj4IBQSCBNqT7EFHi4pI6N3HrAYZQAIxo9xpUhEIffsJuj9MEKa91o2WKmZC/wHiCkHwLtzMu9DQcoUnDBxEhmQjB1OSwSFKhTEOHjKUBATAZxEyjNOGQ8qIkfKLEjwKem40p4yBhLHBcsC48dBzEzhlItic3j+AtE+aPCWHUb6aU6fxYihMCCQB02fEv85RAPShZjUMJgSJ/pmz3rzlCVKEPkzQ/cCLYvAX9Nlz3mUrCQY/cQW4B4Olh7nz3n8QCND6fIXbyIFLcv6ChR8/iQQBoQ+XnlKEjbNAaNHiz7kkwaJEyM85EsxB77dk6ZevUgKPMEQqR1oU2MOy5VnfTITvJEEfhYCKBgnxPywEogd9NORH2hUg4WeynLByla0PJDh6mJQ8KWH1GmSz1kKEzPx8krBuPbJTMcAumNSCPDHJDRuR3YLuZHphgbWHTZvt+5EWIBiTrIQtW7chRxWjyIH5xRaad7F9h0M7lCSTwLKmHnbucsYPDPE0lifk7d7jnB8h+Y36zf+3Fu7d56wfaWW3mu+A3X/goNMA7s0ic2ByOf+hwyrsXEUSPXCnwMbGqfNLJozxD3vk6DG1AGLKZbOxx1XbuQqz5MD8jY074QoAWX6P/p1UmR/RA09gTqnOTyz+q3f6zFnXAdytPne+CHauLly8ZP+B/1+29VB7VMBPAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA5LTE0VDEwOjM5OjA5KzAwOjAw+wDxRQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wOS0xNFQxMDozOTowOSswMDowMIpdSfkAAAAASUVORK5CYII=
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

	const css = `
		header {
			background-color: #FFFFFF !important;
			color: #6B778C !important;
		}
		header button, header button:hover, header button:active, header button:focus, header button:visited, header button:disabled, header button[disabled] {
			color: #344563 !important;
			background-color: transparent !important;
		}
		header button:hover, header button:hover:hover, header button:active:hover, header button:focus:hover, header button:visited:hover, header button:disabled:hover, header button[disabled]:hover {
		   background-color: rgba(222,235,255,0.9) !important;
		   color:#0052CC !important;
		}
		header button:focus, header button:hover:focus, header button:active:focus, header button:focus:focus, header button:visited:focus, header button:disabled:focus, header button[disabled]:focus {
			color: #000 !important;
			box-shadow: 0 0 0 2px #2684FF !important;
		}
		header button[aria-expanded="true"] {
            color: rgb(0, 82, 204) !important;
			background-color: rgba(222, 235, 255, 0.7) !important;
		}
		header > nav a:hover {
		    color: #0052CC !important;
		    background-color: rgba(222,235,255,0.9) !important;
		}
		button#createGlobalItem,
		button#createGlobalItemIconButton {
		    background-color: rgb(0, 82, 204) !important;
			color: rgb(255, 255, 255) !important;
		}
		button#createGlobalItem:hover, button#createGlobalItem:hover:hover, button#createGlobalItem:active:hover, button#createGlobalItem:focus:hover, button#createGlobalItem:visited:hover, button#createGlobalItem:disabled:hover, button#createGlobalItem[disabled]:hover,
		button#createGlobalItemIconButton:hover, button#createGlobalItemIconButton:hover:hover, button#createGlobalItemIconButton:active:hover, button#createGlobalItemIconButton:focus:hover, button#createGlobalItemIconButton:visited:hover, button#createGlobalItemIconButton:disabled:hover, button#createGlobalItemIconButton[disabled]:hover {
		    color: rgb(255, 255, 255) !important;
			background-color: rgba(0, 82, 204, 0.9) !important;
		}
		header [role="img"] {
		    --icon-secondary-color: #FFFFFF !important;
		}
		header span[default=""] {
		  color: #6B778C !important;
		}
		header > nav > div:last-of-type::after {
		    background: linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.7) 50%,rgba(255,255,255,1) 100%) !important;
		}
		header input:not([type="checkbox"]):not([type="radio"]) {
		    background-color: #FFFFFF !important;
			color: #6B778C !important;
			border-color: #DFE1E6 !important;
			box-shadow: none !important;
		}
		header input:not([type="checkbox"]):not([type="radio"])[data-test-id="search-dialog-input"].focus-visible {
             border: 2px solid rgb(76, 154, 255) !important;
			 box-shadow: rgb(255, 255, 255) -12px 0px 24px 0px !important;
			 background-color: rgb(255, 255, 255) !important;
			 color: rgb(9, 30, 66) !important;
		}
	`;

    GM_addStyle(css);
})();
