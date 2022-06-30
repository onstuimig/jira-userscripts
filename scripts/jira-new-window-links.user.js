// ==UserScript==
// @name         JIRA New window links
// @description  Open external links in a new window
// @namespace    https://github.com/onstuimig/jira-userscripts
// @version      1.0.0
// @author       Onstuimig - Jeroen Rothbauer
// @match        https://onstuimig.atlassian.net/*
// @icon         data:image/png;base64,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
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const observer = new MutationObserver(function(mutations) {
		for (let i = 0; i < mutations.length; i++) {
			const mutation = mutations[i];
			if(mutation.addedNodes.length){
				for (let j = 0; j < mutation.addedNodes.length; j++) {
					if(mutation.addedNodes[j].parentNode){
						newWindowLinks(mutation.addedNodes[j].parentNode);
					}
				}
			}
		}
	});
	observer.observe(document.body, {
		childList: true,
		subtree: true
	});

	function newWindowLinks(rich_text) {

        if(!rich_text) {
            return;
        }

		const links = rich_text.querySelectorAll('a[href]');

		for (let i = 0; i < links.length; i++) {
			const link = links[i];
			if(link.host && link.host != window.location.host) {
				if(!link.target) {
					link.target = "_blank";
					if(link.getAttribute('role') == 'button') {
						link.addEventListener('click', function(e){
							e.stopPropagation();
							return true;
						});
					}
				}
			}
		}

	}
})();
