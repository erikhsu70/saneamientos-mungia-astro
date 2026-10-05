export function serviceLandingContent({landingCopy,page,firstPara,firstHeading,cleanBlocks}) {
const escapeHtml = (value = '') => value.replace(/[&<>"']/g, (char) => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
const landingIntro = landingCopy?.intro || page.intro || page.extraText?.[1] || firstPara?.text || '';
const landingHtml = landingCopy?.bodyHtml || page.bodyHtml || [
  ...(page.extraText || []).filter((text) => text !== landingIntro).map((text) => `<p class="source-lead">${escapeHtml(text)}</p>`),
  ...cleanBlocks.filter((block) => block !== firstHeading && !(block.type === 'p' && block.text === landingIntro) && !(page.locations?.length && block.text === '¿Dónde estamos?')).map((block) => block.type === 'image' ? `<figure><img src="${escapeHtml(block.src)}" alt="${escapeHtml(block.alt)}" loading="lazy"></figure>` : `<${/^h[1-4]$/.test(block.type) ? block.type === 'h1' ? 'h2' : block.type : 'p'}>${escapeHtml(block.text)}</${/^h[1-4]$/.test(block.type) ? block.type === 'h1' ? 'h2' : block.type : 'p'}>`),
  ...(page.locations?.length ? [`<h2>¿Dónde estamos?</h2><div class="locations-grid">${page.locations.map((location) => `<a href="${escapeHtml(location.path)}">${escapeHtml(location.label)}</a>`).join('')}</div>`] : []),
].join('\n');

return {landingIntro,landingHtml};
}
