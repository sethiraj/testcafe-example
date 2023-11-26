import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

fixture `Language Change In Direct Ferries WebSite`
    .page `https://www.directferries.co.uk/`;
	
	const clickLanguageFlag = ClientFunction(() => document.querySelector('a.nav-icon.flag').click());
	const clickFrenchFlag = ClientFunction(() => document.querySelector('.fr-FR').click());
	
	function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time || 1000);
    });
}

// Tests
test('Change Language to French', async t => {
	await t
        .maximizeWindow()
		.expect(Selector('a.nav-icon.flag', { visibilityCheck: true }).exists).ok();
		await clickLanguageFlag();
		await clickFrenchFlag();
		await t.expect(Selector('.fr-FR', { visibilityCheck: true }).exists).ok();
		await sleep(3000);
});