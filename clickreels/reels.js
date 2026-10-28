/* ClickReels: original browser-only lessons, no social API or background publishing. */
(()=>{"use strict";
const lessons=[
["Buyer intent","Clicks are not customers","Ask why a visitor came before judging traffic quality.","Compare page behavior with the promise in the link.","Improve the fit between message and destination."],
["Landing pages","Lead with a helpful answer","The first screen should explain a real benefit.","Put a clear, accurate headline before offers.","Keep navigation simple on a phone."],
["Email consent","Make subscriptions voluntary","Explain the newsletter before collecting email addresses.","Tell readers what to expect and how to unsubscribe.","Never treat silence as permission."],
["Traffic quality","Measure more than visits","Large traffic numbers do not establish interested buyers.","Compare meaningful engagement, not just hit counts.","Exclude suspicious automated visits."],
["Disclosures","Make referrals transparent","Readers should recognize promotional relationships.","Place an affiliate disclosure near a referral link.","Avoid hiding disclosures in tiny footers."],
["Audience research","Find a specific problem","Useful content answers questions rather than guessing needs.","Study genuine beginner questions and recurring challenges.","Write one original answer with a practical example."],
["SEO titles","Describe the page honestly","Searchers use titles to evaluate relevance.","Give distinct pages distinct descriptive titles.","Avoid keyword repetition without substance."],
["Tracking","Label your campaigns consistently","Consistent source labels help you compare channels.","Use meaningful UTM parameters where appropriate.","Review real results before changing offers."],
["Offer evaluation","Read the actual terms","Understand product features, price, cancellation and refunds.","Check claims against the provider's own documentation.","Do not advertise results you cannot support."],
["Mobile design","Design for thumbs","Small screens expose awkward layouts quickly.","Use readable type and buttons with enough spacing.","Test the site at mobile widths."],
["Helpful resources","Make every lesson useful","A visitor should learn something without buying.","Include a step they can try immediately.","Offer related tools only when relevant."],
["Search indexing","A sitemap is not a guarantee","Search engines decide whether and when to index content.","Check the correct verified Search Console property.","Separate submitted URLs from indexed URLs."],
["Opt-in forms","Ask only what you need","Extra fields can discourage legitimate signups.","Explain collection and link to a clear privacy notice.","Make the submit action unambiguous."],
["Originality","Write for specific needs","Near-identical pages rarely give readers new value.","Use unique examples and genuinely different advice.","Avoid mass doorway-page creation."],
["Buttons","Make calls to action descriptive","A link should signal what happens when tapped.","Say what the external resource provides.","Do not disguise signups or payments."],
["Testing","Change one thing at a time","A small measurement sample can mislead.","Pick a testable page problem and define a metric.","Don't guarantee higher conversions."],
["Subscribers","Respect inboxes","A growing list is useful only with genuine consent.","Honor unsubscribe requests promptly.","Never import unrelated contact lists."],
["Privacy","Collect less information","Data minimization protects readers and reduces risk.","Ask only for details needed for the stated purpose.","Publish accurate privacy terms."],
["Social lessons","One idea per short video","Keep educational tips understandable with sound off.","Use clear captions and an actionable example.","Avoid repeating identical posts everywhere."],
["Free offers","Check the limits","An offer's name doesn't prove it is fully free.","Verify signup requirements, upsells and restrictions.","Disclose material conditions before a click."],
["Trust","Make claims verifiable","Clear terms and real contact details aid decisions.","Remove invented reviews and performance numbers.","Invite readers to verify product information."],
["Analytics","Define a useful outcome","Traffic is only one part of the visitor journey.","Look at engaged sessions and voluntary signups.","Improve the pages that genuinely help people."],
["Accessibility","Include everyone","Controls must work with keyboards and touch.","Label buttons and respect reduced-motion settings.","Check contrast and focus visibility."],
["Weekly review","Improve one helpful page","Real improvements beat another shallow promotion.","Review a page's factual accuracy and usability.","Record what changed and review later."]
];
const $=id=>document.getElementById(id), labels=["01 / THE IDEA","02 / WHY IT MATTERS","03 / NEXT STEP"];
let index=0,scene=0,paused=false,activeHour="",selectedManually=false;
const reduced=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
const total=lessons.length;
function hourInfo(){const parts=new Intl.DateTimeFormat("en-CA",{timeZone:"America/Vancouver",hour:"2-digit",hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date());const obj=Object.fromEntries(parts.map(x=>[x.type,x.value]));return {key:obj.year+"-"+obj.month+"-"+obj.day+" "+obj.hour,slot:Number(obj.hour)%total};}
function sceneView(){const l=lessons[index];const headings=[l[1],l[2],l[4]];const bodies=[l[2],l[3],"A relevant link can be a next step, not a promise of results."];$("scene-label").textContent=labels[scene];$("scene-heading").textContent=headings[scene];$("scene-body").textContent=bodies[scene];document.querySelectorAll(".bar").forEach((b,i)=>{b.classList.toggle("done",i<scene);b.classList.toggle("active",i===scene)});const node=document.querySelector(".story-scene");if(node&&!reduced){node.classList.remove("animate");void node.offsetWidth;node.classList.add("animate")}}
function show(i,featured){index=(i+total)%total;scene=0;$("topic").textContent=lessons[index][0].toUpperCase();$("episode").textContent=String(index+1).padStart(2,"0");$("featured").textContent=featured?"HOUR'S PICK":"FROM THE LIBRARY";sceneView();$("reel-status").textContent="Reel "+(index+1)+" of "+total+": "+lessons[index][0]}
function checkHour(){const h=hourInfo();if(h.key!==activeHour){activeHour=h.key;selectedManually=false;show(h.slot,true);$("hour-note").textContent="Featured for "+h.key+" Vancouver time."}}
$("previous").addEventListener("click",()=>{selectedManually=true;show(index-1,false)});
$("next").addEventListener("click",()=>{selectedManually=true;show(index+1,false)});
$("pause").addEventListener("click",()=>{paused=!paused;$("pause").textContent=paused?"▶ Play":"Ⅱ Pause";$("pause").setAttribute("aria-pressed",String(paused))});
document.addEventListener("visibilitychange",()=>{if(!document.hidden)checkHour()});
checkHour();setInterval(checkHour,30000);
if(!reduced)setInterval(()=>{if(!paused&&!document.hidden){scene=(scene+1)%3;sceneView()}},6000);
})();
