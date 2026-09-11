# Project Log

This file records concrete project changes made during assisted work. Each entry should include the date, files touched, what changed, and why.

## 2026-09-04

### Root font zip extraction workflow
- Files touched: `start-python-server.sh`, `fonts/site-fonts.css`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor-assistant-manual.json`, `fonts/_extracted/`
- Added automatic extraction for zip packages dropped into the root `fonts/` folder. Extracted packages now live under `fonts/_extracted/`.
- Updated generated `fonts/site-fonts.css` to recursively include root font files from loose files and extracted packages.
- Updated the PHP editor to scan root fonts recursively, show them in font dropdowns, load them in the editor preview, and serve them through a read-only local font route.
- Reason: The new fonts were provided as zip packages, but the previous workflow only detected loose font files directly inside `fonts/`.

### Demo server starts static site and editor
- Files touched: `start-python-server.sh`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor-assistant-manual.json`
- Updated the local demo startup script to start the PHP editor preview in the background before serving the static homepage. The script now prints both the editor URL and the static URL.
- Added cleanup so the background PHP editor server stops when the static server process exits.
- Reason: Demo sessions need both the public static page and the editor page available from one startup command.

### Upcoming Shows filter alignment
- Files touched: `index.html`, `assets/icons/directions-transparent.png`
- Moved the Date/Location segmented control into the Upcoming Shows heading row and aligned it to the right of the section title.
- Kept the location map icon visible at all times, made it slightly larger, removed the CSS shadow treatment, and replaced the black-background source image with a transparent icon asset.
- Reason: The filter should coordinate visually with the Upcoming Shows heading, and the map icon should read as an icon instead of a shadowed box.

### Join Cast layout and role labels
- Files touched: `index.html`, `assets/lazer-alpha.webm`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/data/site.json`
- Reworked the Join Cast panel so the current casting list appears as "Currently casting for:" followed by the role list, with the "different role" note underneath.
- Right-aligned and enlarged the email button, moved the laser animation to a larger top-aligned treatment, and generated a transparent-background WebM from the black-background MP4 with the original MP4 kept as fallback.
- Updated casting role labels/order for the editor and live data: removed Transylvanian, changed Brad/Janet to first names, changed Dr. Everett Scott to Dr. Scott, and changed Usherette to Trixie.
- Adjusted the Time Warp heading word timings to better match the sung cadence.
- Reason: The Join Cast section needed clearer hierarchy, cleaner role labels, and a bigger right-side action area.

### Join Cast flip and Location filter behavior
- Files touched: `index.html`
- Flipped the Join Cast layout so the email button/laser action sits on the left and the current casting list sits on the right.
- Moved the map icon to the right side of the Date/Location segmented control.
- Removed the separate "Use my location" button. Switching to Location mode now immediately requests browser geolocation, while the ZIP input remains available underneath as a fallback if permission is denied.
- Changed the Time Warp heading animation so the word cadence starts when the page is revealed instead of running behind the intro overlay.
- Reason: The action/list alignment needed to match the intended layout, Location mode should default to browser location, and the Time Warp cadence needed to be visible.

### Time Warp cadence loop
- Files touched: `index.html`
- Changed the Time Warp heading cadence from a one-shot reveal to a repeating loop. The phrase resets together after "Again" lands, then replays with the same sung timing.
- Added a reduced-motion fallback that keeps all words visible when animations are disabled.
- Reason: The title animation should continue after page load instead of only firing once.

### Time Warp animation-off fallback
- Files touched: `index.html`
- Updated the animation toggle so turning animations off clears the Time Warp cadence loop and forces all heading words visible as static text.
- Turning animations back on restarts the cadence loop.
- Reason: The heading should not disappear when site animations are disabled.

### Time Warp line grouping and slower cadence
- Files touched: `index.html`
- Slowed the Time Warp heading cadence by 30%.
- Rebuilt the generated heading as three non-wrapping span lines: "Let's Do", "The Time Warp", and centered "Again".
- Changed the heading to white with a full black shadow outline so it pops against the dark header.
- Set the heading font to `DoubleFeature30`, the closest local match to the Rocky/Time Warp step-chart lettering from the newly extracted font set.
- Reason: The title should follow the sung phrasing and keep each phrase together responsively.

### Imported font seasoning pass
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/data/events.json`, `stuffworked-on-a-bit/rhps/data/site.json`
- Added reusable imported-font variables and applied them across the static page: headings, controls, buttons, generic show copy, custom venue defaults, info accordions, Join Cast chips, footer controls, modals, and themed callouts.
- Seeded existing event line style data with imported font families so saved event settings no longer keep the old Impact defaults.
- Seeded static info box style data with imported font families so those editor-controlled boxes also show the new font options immediately.
- Reason: The newly imported fonts should be visible throughout the current prototype as an editable first pass.

### Hover font color controls
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/data/events.json`, `stuffworked-on-a-bit/rhps/data/site.json`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor-assistant-manual.json`
- Added hover color controls to every editor event line style panel.
- Added hover font color controls to the Site Settings static info box style panels for Regular Venues and More Information boxes.
- Updated the static homepage so event text lines use saved `hoverColor` values and additional info boxes use saved `hoverTextColor` values on hover/focus.
- Seeded existing event and static info JSON with initial hover colors.
- Reason: Font color styling needs editable hover states from events through additional info.

### Join Cast laser placement
- Files touched: `index.html`
- Moved the laser animation below the Join Cast email button in the left action column and removed the overlapping absolute placement.
- Reason: The laser was visually interfering with the Join Cast content and should sit underneath the button instead.

## 2026-08-27

### Project logging workflow
- Files touched: `PROJECT_LOG.md`
- Created this log as the shared reference point for assisted project work.
- Reason: Future changes should be recorded after they are made so design decisions, file edits, and workflow context are not lost between sessions.

### UC marquee animation color direction
- Files touched: `uc_marquee_test.html`
- Changed the window animation from a psychedelic rainbow/hue-rotation effect to more solid dance-party colors with subtle highlight, shadow fade, glow, sweep, and strobe layers.
- Reason: The desired direction was solid colors with some shadow fading, not a psychedelic look.

### UC marquee unison rainbow and mask threshold pass
- Files touched: `uc_marquee_test.html`
- Changed all marquee animation panes to share one color at a time, cycling through rainbow colors in unison over a 12-second loop with fast transitions and slower holds.
- Expanded the CSS clip-path coverage based on measured green-screen bounds in `uc_marquee.png`, especially around the left, right, and lower marquee panes where green artifacts were still visible.
- Reason: The intended effect is a unified dance-party color change, not separate colors per pane, and the keyed animation area needed a higher/tighter threshold to cover leftover green artifacts.

### UC marquee generated alpha mask
- Files touched: `uc_marquee_test.html`, `uc_marquee_mask.png`
- Replaced the hand-positioned polygon window overlays with one full-stage animation layer masked by a generated alpha mask from `uc_marquee.png`.
- Generated `uc_marquee_mask.png` from green-screen pixels and darker green edge spill, then filtered it to keep meaningful marquee-band components and expand the coverage slightly.
- Kept the animated layer fully opaque so the green source image cannot show through during brightness pulses.
- Reason: Polygon approximations were still leaving visible green artifacts; a real image mask is a better workflow for this asset.

### UC marquee alpha-mask browser compatibility
- Files touched: `uc_marquee_test.html`, `uc_marquee_mask_alpha.png`
- Converted the grayscale mask into a true RGBA alpha mask and updated the CSS mask URL to use `uc_marquee_mask_alpha.png` with explicit alpha mask mode.
- Reason: The grayscale mask did not reliably display the animated layer in the browser, leaving the original green-screen image visible.

### UC marquee transparent PNG color overlays
- Files touched: `uc_marquee_test.html`, `uc_marquee_overlay_red.png`, `uc_marquee_overlay_orange.png`, `uc_marquee_overlay_yellow.png`, `uc_marquee_overlay_green.png`, `uc_marquee_overlay_cyan.png`, `uc_marquee_overlay_blue.png`, `uc_marquee_overlay_magenta.png`
- Generated one transparent PNG overlay per rainbow color using the alpha mask, then stacked those overlays above the original marquee image.
- Changed the animation to cycle overlay opacity in order over a 12-second loop, avoiding dependence on CSS mask rendering for the main visible color replacement.
- Set each color to hold fully opaque until the next color takes over, so the original green-screen image does not show through between colors.
- Reason: The CSS mask approach still showed the original green image in the browser; transparent PNG overlays are more reliable for local preview.

### UC marquee softened mask edge
- Files touched: `uc_marquee_test.html`, `uc_marquee_mask_alpha.png`, `uc_marquee_overlay_red.png`, `uc_marquee_overlay_orange.png`, `uc_marquee_overlay_yellow.png`, `uc_marquee_overlay_green.png`, `uc_marquee_overlay_cyan.png`, `uc_marquee_overlay_blue.png`, `uc_marquee_overlay_magenta.png`
- Regenerated the alpha mask and all transparent color overlays with a feathered edge instead of the earlier chunky square dilation.
- Reduced the CSS highlight/pulse layer opacity and peak brightness so the keyed edge is less obvious at full pulse.
- Reason: The animation was working, but the green-screen replacement area looked blocky when the pulse reached full brightness.

### UC marquee lower-left test text
- Files touched: `uc_marquee_test.html`
- Added a sample text overlay in the lower-left marquee panel with three `h2` lines and one `h3` line for future dynamic event text.
- Measured the panel's top-edge angle at about `-3.6deg` and used that rotation for alignment, with a slight 3D `rotateY` perspective so text scales larger left-to-right.
- Set the sample text to white with dark shadowing for readability over the animated rainbow colors.
- Reason: The lower-left marquee panel needs aligned placeholder text before wiring in dynamic show data.

### UC marquee lower-left text placement
- Files touched: `uc_marquee_test.html`
- Moved the lower-left marquee text down into the black box area and increased the text box width, line gap, `h2` size, and `h3` size.
- Reason: The first placement had the right perspective idea but sat too high and too small; it needed to fill the lower-left black marquee space.

### UC marquee grid reference page
- Files touched: `uc_marquee_grid_reference.html`, `uc_marquee_grid.png`
- Copied the marquee animation test page into a separate grid-reference page and generated a white numbered grid overlay with ImageMagick.
- Added the grid as a topmost overlay so placement feedback can reference visible coordinates without changing the working animation page.
- Reason: The lower-left marquee text needs more precise placement guidance, and the dark source image needs a white grid for readable reference points.

### UC marquee grid label readability
- Files touched: `uc_marquee_grid.png`
- Regenerated the grid with larger pure-white coordinate labels and heavier black outlines.
- Reason: The first grid labels were too hard to read after the reference image scaled down in the browser.

### UC marquee text fit to provided grid points
- Files touched: `uc_marquee_test.html`, `uc_marquee_grid_reference.html`
- Repositioned and resized the lower-left sample text to fit the user-provided reference area: top-left `2.7`, top-right `9.6`, bottom-left `2.11`, bottom-right `9.10`.
- Increased the text block to span the larger lower-left black sign area, changed the rotation to about `-7deg`, and enlarged the `h2` and `h3` lines.
- Reason: The previous text block was in the right general direction but did not fill the referenced black-box area.

### UC marquee text horizontal fit correction
- Files touched: `uc_marquee_test.html`, `uc_marquee_grid_reference.html`
- Reduced the lower-left text block width, lowered the `h2` and `h3` font sizes, and reduced the per-line left offsets.
- Reason: The previous pass had the right target area but the sample text was too wide horizontally and overflowed the outlined space.

### UC marquee fitted text box and per-character scale
- Files touched: `uc_marquee_test.html`
- Removed the temporary green background from the fitted lower-left text box and added overflow clipping.
- Added character wrapping for the sample marquee text, with each character scaling slightly larger right-to-left in `.001` increments.
- Added line-fit logic that scales each line horizontally only when needed so dynamic text can fill the fitted box without bleeding out.
- Reason: The text box position was resolved manually, and the remaining work was to make the text fill that box cleanly.

### UC marquee progressive line angles
- Files touched: `uc_marquee_test.html`
- Added IDs to the three `h2` lines and the `h3` subline: `marquee-line-1`, `marquee-line-2`, `marquee-line-3`, and `marquee-subline`.
- Added line-specific rotation variables for a test progression of `12deg`, `8deg`, `4deg`, and `2deg`.
- Increased the per-character scale increment from `.001` to `.01` so the perspective effect is more visible.
- Reason: The previous character scaling was too subtle, and each line needs independently tunable angle values.

### UC marquee progressive angle direction correction
- Files touched: `uc_marquee_test.html`
- Flipped the line-specific angle values negative: `-12deg`, `-8deg`, `-4deg`, and `-2deg`.
- Reason: The first angle test had the right progression but rotated in the wrong direction.

### UC marquee text angle and vertical tuning
- Files touched: `uc_marquee_test.html`
- Reduced the first line angle from `-12deg` to `-10deg`.
- Moved the entire fitted text box slightly lower by changing its top position from `58.1%` to `59.4%`.
- Reason: The first line angle was too strong, and the full text group needed to sit lower in the box.

### UC marquee container-angle text model
- Files touched: `uc_marquee_test.html`
- Moved the maximum `-10deg` rotation onto the full text container and changed each line angle to a counter-rotation: `0deg`, `2deg`, `6deg`, and `8deg`.
- Preserved the same approximate net line angles while reducing top clipping on the first `h2`.
- Added a small top padding inside the fitted text box to protect against font and shadow clipping.
- Reason: Rotating the first line itself caused it to clip against the fitted box; rotating the whole box first and counter-rotating lines should keep the text inside the box.

### UC marquee event-data integration
- Files touched: `uc_marquee_test.html`, `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/data/events.json`, `stuffworked-on-a-bit/rhps/data/venues.json`
- Made the UC marquee text block a clickable anchor and gave the UC Theatre marquee lines stable IDs and `data-event-field` mappings.
- Added UC marquee fields to event records in the PHP editor: `marqueeLine1`, `marqueeLine2`, `marqueeLine3`, `marqueeSubline`, `marqueeTextColor`, and `marqueeFontFamily`.
- Reused the existing event `ticketUrl` as the clickable marquee link, since the marquee is an event listing for the UC Theatre venue.
- Added local UC Theatre venue and sample UC Theatre marquee event data.
- Placed the UC marquee component into `index.html` in the featured show card and wired it to load `events.json` and `venues.json`.
- Reason: The marquee belongs to a UC Theatre event listing, not a separate marquee content type, and the homepage needs the component where it will live when activated.

### Homepage test skip, static data, and side art pass
- Files touched: `index.html`, `PROJECT_LOG.md`
- Added an invisible intro skip button covering the bottom 20% of the loading screen so the loading animation can be bypassed during testing.
- Changed the homepage UC marquee text sizing to use container query units (`cqw`) instead of viewport units so the text scales from the marquee image/card width and does not get over-compressed.
- Kept the homepage wired as a static HTML page that fetches reference JSON files (`events.json` and `venues.json`) generated/edited by the PHP editor; the public page does not need to be served by PHP.
- Replaced the left and right upcoming-show side placeholders with `gargoyle_1.png` and `gargoyle_2.png`.
- Reason: The homepage needs faster testing, static-site compatible dynamic content, corrected marquee text scaling, and the real side decoration assets.

### Gargoyle proximity bloom interaction
- Files touched: `index.html`
- Added a proximity-based bloom state for the left and right gargoyle decorations when the pointer comes within about 20% of the viewport size.
- Added glow, drop-shadow, brightness, and slight lift/scale effects for the active gargoyle state.
- Wired the interaction into the existing animation toggle so turning animations off clears and disables the bloom.
- Reason: The gargoyles should have a subtle interactive response while still respecting the global animation controls.

### Gargoyle cursor light-source interaction
- Files touched: `index.html`
- Changed the gargoyle interaction from a binary glow to a cursor-driven light source.
- Added CSS variables for light intensity, light position, and shadow direction, updated continuously from mouse position.
- Made the bloom intensify as the cursor gets closer and made the drop-shadow angle respond to cursor position relative to each gargoyle.
- Kept the interaction tied to the existing animation-off button so disabling animations clears and suppresses the light effect.
- Reason: The cursor should feel like the active light source rather than triggering a generic static shadow.

### Gargoyle masked light-layer refinement
- Files touched: `index.html`
- Reduced the background bloom intensity and added a separate masked light layer using each gargoyle PNG as the alpha mask.
- Increased brightness/contrast on the actual gargoyle image as the cursor approaches, while keeping the surrounding background much less lit.
- Clamped cursor coordinates inside each gargoyle box so the radial light center tracks the mouse more directly.
- Reason: The previous effect still lit the background too much and did not feel centered enough on the cursor; the stone image itself needed the stronger visible light response.

### UC marquee animation-off color fallback
- Files touched: `index.html`
- Added a static red overlay fallback for the UC marquee when global animations are disabled or reduced motion is active.
- Reason: The global animation-off rule stopped the color overlay animations while the overlays' default opacity was `0`, which could leave the original green marquee visible and make the colored marquee effect appear broken.

### Static homepage UC marquee color repair
- Files touched: `index.html`
- Replaced the homepage marquee's fragile staggered CSS overlay animation with a static-page-friendly setup.
- Added one masked CSS `color-wash` layer and restored the transparent PNG color overlays as the reliable visible layer.
- Added JavaScript to cycle the PNG overlay visibility every ~1.7 seconds and to leave the red overlay visible when animations are disabled.
- Reason: The UC marquee color animation stopped working in the static homepage; the homepage should be edited and previewed as the static page, not through the PHP editor server.

### State Theatre marquee analysis and test component
- Files touched: `state_marquee.png`, `state_marquee_test.html`, `state_neon_mask.png`, `state_neon_mask_glow.png`, `state_neon_cyan_mask.png`, `state_neon_cyan_mask_glow.png`, `state_neon_red_mask.png`, `state_neon_red_mask_glow.png`, `state_neon_yellow_mask.png`, `state_neon_yellow_mask_glow.png`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/data/events.json`, `stuffworked-on-a-bit/rhps/data/venues.json`
- Analyzed `state_marquee.png` as a `2000x1000` neon marquee image.
- Measured the two brown dynamic text panels: left `x 185-782, y 717-879`; right `x 1219-1813, y 717-879`.
- Generated alpha masks for the overall neon tubing plus cyan, red, and yellow neon groups, including softer glow variants.
- Created `state_marquee_test.html` with layered neon glow/core animation and two flat dynamic text panels.
- Added `state-marquee` as an event card style in the PHP editor and added State marquee event fields for left/right panel text, text color, and font family.
- Added local State Theatre venue and sample State marquee event JSON records.
- Reason: The State Theatre asset needs a separate 2-D marquee component with neon light-cycle animation and editable event listing text in the brown panels.

### Static homepage gargoyle light repair
- Files touched: `index.html`
- Fixed an invalid `filter` declaration in the gargoyle image CSS caused by a missing closing parenthesis in a `drop-shadow()`.
- Replaced fragile calculated color-alpha shadows with more compatible static colored drop-shadows driven by variable offsets and blur sizes.
- Added lit-shadow direction variables so the cursor-driven light remains directional while rendering more reliably in the static page.
- Reason: The gargoyle interaction was not visibly working on the static page because the browser could ignore the invalid filter declaration.

### State Theatre grid reference page
- Files touched: `state_marquee_grid.png`, `state_marquee_grid_reference.html`
- Copied the State Theatre marquee test page into a grid-reference page.
- Generated a `2000x1000` all-white numbered grid with ImageMagick, using large white labels and black outlines for readability.
- Added the grid as the topmost overlay so the two dynamic text panel bounds can be specified precisely.
- Reason: The initial State Theatre text was too large and clipped; exact grid references are needed for the final panel dimensions.

### State Theatre click-grid selector
- Files touched: `state_marquee_grid_reference.html`, `PROJECT_LOG.md`
- Changed the clickable selector grid from `100px` cells to `25px` cells over the `2000x1000` State Theatre marquee image.
- Changed submit logic to find disconnected selected-cell groups and output each group as a separate div region, sorted left to right as `.state-panel-copy.left` and `.state-panel-copy.right`.
- Clear now removes both selected cells and submitted overlay boxes.
- Reason: The State Theatre marquee has two separate text panels, so the selector needs to produce left and right boxes without bridging the empty space between them.

### State Theatre measured panel bounds and grid generator
- Files touched: `state_marquee_test.html`, `state_marquee_grid_reference.html`, `scripts/generate_grid_overlay.sh`, `PROJECT_LOG.md`
- Applied the selected State Theatre text panel bounds: left `left: 10%; top: 72.5%; width: 28.75%; height: 15%;` and right `left: 61.25%; top: 72.5%; width: 30%; height: 15%;`.
- Added a reusable ImageMagick grid overlay generator script that accepts output path, image width, image height, cell size, and label step.
- Reason: The user-selected grid output is now the source of truth for State Theatre panel placement, and the grid overlay workflow should be reusable for future marquee assets.

### State Theatre parent-responsive text fit
- Files touched: `state_marquee_test.html`, `state_marquee_grid_reference.html`, `PROJECT_LOG.md`
- Changed State marquee panel text sizing so each text panel is its own size container and line sizes use the parent panel's `cqw/cqh` units instead of the full marquee's width.
- Switched the panel layout to centered flex columns with panel-relative padding and gaps.
- Updated the line fitting script to measure the true padded content width and allow stronger horizontal compression for long dynamic text.
- Reason: The text must stay inside the selected left/right divs at different viewport sizes and with longer editor-provided event text.

### Static homepage gargoyle fitted-image light repair
- Files touched: `index.html`, `PROJECT_LOG.md`
- Re-read the logged gargoyle behavior and kept the intended cursor-as-light-source interaction tied to the animation toggle.
- Reduced the background/container bloom and strengthened the masked PNG light layer plus the directional drop-shadows on the gargoyle image itself.
- Changed the mouse proximity and light-position math to use the actual `object-fit: contain` image rectangle inside each side column instead of the full decoration box.
- Reason: The gargoyle PNGs are tall and narrow, so using the full side-column box can make the light source land in empty space instead of on the visible stone creature.

### Static homepage gargoyle background sensitivity split
- Files touched: `index.html`, `PROJECT_LOG.md`
- Added a separate `--bg-light-intensity` value for the gargoyle background bloom.
- Kept the image/masked gargoyle light responsive across the full proximity range, while the background bloom now starts later and ramps quadratically at a much lower opacity.
- Reason: The cursor light should read mostly on the stone creature, with the background reacting less sensitively than the image layer.

### Static homepage gargoyle frameless placement
- Files touched: `index.html`, `PROJECT_LOG.md`
- Removed the shared `placeholder` class from the left and right gargoyle containers.
- Removed the gargoyle container border, border radius, and container box-shadow while keeping the PNG image, masked cursor light, and directional drop-shadow behavior.
- Reason: The gargoyles should sit directly against the page background instead of inside visible placeholder boxes.

### Static homepage gargoyle shadow bleed
- Files touched: `index.html`, `PROJECT_LOG.md`
- Changed the gargoyle containers from clipped to visible overflow so image drop-shadows and cursor lighting can bleed onto the surrounding page background.
- Expanded and softened the faint background bloom layer beyond the container bounds to avoid a hard rectangular glow cutoff.
- Reason: The gargoyle lighting should read as part of the page background, not as a distinct glowing box around each side decoration.

### Static homepage UC marquee halo treatment
- Files touched: `index.html`, `PROJECT_LOG.md`
- Removed the visible featured-card hardline styling around the UC marquee while keeping the layout structure.
- Removed the featured-card border width entirely so no transparent/anti-aliased card edge appears around the marquee.
- Changed the UC marquee stage to transparent, frameless, and overflow-visible so light can bleed past the image bounds.
- Added rotating conic ray and breathing radial halo layers behind the marquee, plus a subtle floating motion on the stage.
- Added image drop-shadows that follow the current party glow color.
- Reason: The UC marquee should feel like it is glowing/floating against the page background instead of sitting inside a visible hard-edged box.

### Static homepage UC marquee searchlight rays
- Files touched: `index.html`, `PROJECT_LOG.md`
- Changed the marquee ray layer from a full rotating burst to an eight-beam searchlight pattern.
- Masked the rays into the upper 45-degree cone above the marquee and changed the motion to a slow left/right pan instead of a full rotation.
- Reason: The marquee should read more like big-event searchlights above the sign, not a full circular halo spin.

### PHP editor event form cleanup
- Files touched: `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor.css`, `PROJECT_LOG.md`
- Reorganized the event editor into clearer sections for basics, Pacific date/time, optional multiple events, event details, and venue-specific marquee text.
- Replaced separate start/end/additional date clutter with one visible Pacific ISO start field plus native date and time controls that generate the ISO value with a Pacific offset.
- Added a clickable slider toggle for multiple events and a `?` help popover that explains back-to-back/residency dates and next-occurrence behavior.
- Removed the visible event `Card theme override` selector; event card style now derives from the selected venue's `cardStyle`.
- Added venue-driven field visibility so UC Theatre marquee fields and State Theatre marquee fields only appear for matching venue themes.
- Wrapped generated form fields as single `.field` blocks so labels, inputs, hints, and tag previews stay together inside two-column layouts.
- Reason: Event editing should only show fields relevant to the chosen venue/scenario and should avoid exposing redundant internal theme controls.

### PHP editor per-line marquee styling and font library
- Files touched: `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor.css`, `stuffworked-on-a-bit/rhps/data/site.json`, `PROJECT_LOG.md`
- Added a reusable styled-line editor control for venue marquee text lines with a compact `>` toggle next to each label.
- Each marquee line can now store its own color, font family, bold, italic, and underline settings in a sibling `...Style` object.
- Removed the old visible global marquee color/font controls from the event form to keep venue-specific text sections cleaner.
- Added a Site settings font library with built-in defaults plus controls to add linked font URLs or upload local font files (`woff2`, `woff`, `ttf`, `otf`).
- Added generated editor `@font-face`/`@import` CSS for saved font entries, and live input preview for selected per-line styles.
- Excluded font-management utility fields from the inline tag autocomplete so tag suggestions stay focused on content fields.
- Reason: Marquee styling needs to be per line without cluttering the main event editor, and font choices need to come from a reusable project-level library.

### Static homepage per-line marquee style rendering
- Files touched: `index.html`, `PROJECT_LOG.md`
- Updated the homepage UC marquee JSON loader to fetch `site.json` in addition to events and venues.
- Added static-page font loading for saved Site settings fonts, including linked CSS files and uploaded local editor font files.
- Applied each event line's saved `...Style` object to the corresponding marquee line before character wrapping and line fitting.
- Reason: Per-line color, font, bold, italic, and underline choices made in the PHP editor need to appear the same way on the static `index.html` page.

### Prototype JSON style normalization
- Files touched: `stuffworked-on-a-bit/rhps/data/events.json`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `PROJECT_LOG.md`
- Added per-line `...Style` objects to the current UC Theatre and State Theatre sample event records so the prototype data exercises the new editor and static homepage rendering path immediately.
- Kept the older global marquee color/font fields as compatibility fallbacks while the static page and test pages are still being wired together.
- Added editor-side default style backfilling so older event records open with usable color/font/bold values even if they do not yet have explicit line style objects.
- Reason: The working prototype should not depend on missing JSON fields or require manually resaving every old event before the new styling workflow functions.

### Static homepage State marquee activation
- Files touched: `index.html`, `PROJECT_LOG.md`
- Replaced the secondary placeholder show card with a real State Theatre marquee card.
- Added the State Theatre marquee CSS, panel placement, dynamic text hooks, and event/venue JSON loader to the static homepage.
- Swapped the State marquee base from `state_marquee.png` to the animated `state_sign.mp4`, confirmed as `2000x1000`.
- Wired the State sign video into the existing animation toggle so animations off pauses/resets the MP4 and animations on resumes it.
- Started a local static server on `http://127.0.0.1:8082/` because opening `index.html` as `file://` can block JSON fetches and leave fallback text visible.
- Reason: The working prototype needs both UC and State events visible on `index.html`, with JSON-driven text/styles and the new animated State sign asset.

### Static homepage marquee fallback/link cleanup
- Files touched: `index.html`, `PROJECT_LOG.md`
- Removed hardcoded fallback text from the UC and State marquee `<h2>/<h3>` elements so stale defaults are not visible when JSON loading fails.
- Changed UC and State marquee text containers from whole-panel anchors to normal containers.
- Added inline tag rendering for marquee line text so only editor-authored tags like `<ticket-link>text</ticket-link>`, `<directions-link>text</directions-link>`, `<theater-link>text</theater-link>`, and `<calendar-link>text</calendar-link>` create clickable anchors.
- Preserved per-line style rendering while allowing tagged anchor text to inherit the selected color/font/bold/italic/underline.
- Reason: Marquee text should come from the editor JSON only, and links should exist only where the editor explicitly marks linked text.

### UC marquee click-grid selector
- Files touched: `uc_marquee_grid_reference.html`, `PROJECT_LOG.md`
- Added the same click-to-select overlay workflow used for the State Theatre marquee to the UC marquee grid reference page.
- The UC selector uses 25px cells over the native `1650x1200` image and outputs CSS plus JSON bounds for the selected `.uc-marquee-venue-link` region.
- Reason: The right-side UC marquee venue-website link needs exact user-selected bounds before it is wired into the static homepage.

### Static homepage UC venue website hit area
- Files touched: `index.html`, `PROJECT_LOG.md`
- Added an invisible `.venue-website-link` overlay to the right side of the UC marquee using the selected bounds: left `54.55%`, top `43.75%`, width `37.88%`, height `45.83%`.
- Wired the overlay `href` to the current UC venue's `website` field from `venues.json`, with `https://theuctheatre.org/` as the static fallback.
- Reason: The UC marquee needs a special right-side click target that links to the venue website without making the whole marquee or editor text clickable.

### Static homepage custom venue card cleanup
- Files touched: `index.html`, `PROJECT_LOG.md`
- Added a `custom-venue-card` class for fully designed venue marquee cards such as UC Theatre and State Theatre.
- Removed visible card chrome, padding, shadows, generic date/venue rows, and standard Tickets/Directions/Details buttons from those custom venue cards.
- Kept the standard metadata/action classes scoped so plain custom events that are not linked to a custom venue can still display the normal box and buttons.
- Reason: Custom venue marquees already carry their own visual layout and links, while non-venue custom events still need the regular card controls.

### Phoenix Theatre custom event card prototype
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/data/events.json`, `stuffworked-on-a-bit/rhps/data/venues.json`, `PROJECT_LOG.md`
- Added a Phoenix Theatre custom homepage card using `Pheonix-logo.jpg` as a static logo asset.
- Added animated fire-lit shadow layers behind the black-and-white Phoenix logo and a slow z-axis sway from `-10deg` to `10deg`.
- Added a four-line Phoenix text block to the right of the logo with responsive line fitting and inline tag-link rendering.
- Added `phoenixLine1` through `phoenixLine4` plus sibling `...Style` objects to the editor save path and event edit form.
- Added a `phoenix-theatre` venue record and sample `phoenix-theatre-sample` event so the static page and editor have live prototype content.
- Reason: Phoenix Theatre needs a simpler custom venue treatment that still uses the same editable text/style/tag workflow as the marquee venues.

### State marquee text size increase
- Files touched: `index.html`, `PROJECT_LOG.md`
- Doubled the State Theatre marquee text font sizes from `h2: min(9.2cqw, 30cqh)` to `h2: min(18.4cqw, 60cqh)` and from `h3: min(5.2cqw, 18cqh)` to `h3: min(10.4cqw, 36cqh)`.
- Reason: The State Theatre marquee text was reading too small in the custom sign panel.

### Multiple-event occurrence ticket URLs
- Files touched: `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor.css`, `stuffworked-on-a-bit/rhps/data/events.json`, `index.html`, `PROJECT_LOG.md`
- Replaced the visible single event Ticket URL input with a dynamic `Ticket URLs by occurrence` editor.
- The editor now builds one ticket URL row for the primary `dateTime` plus one row for each additional `dateTimes` entry when `Show multiple events` is enabled.
- Saved events now keep a `ticketUrls` array aligned to those occurrences while preserving `ticketUrl` as the first non-empty URL for older/static link compatibility.
- Updated static homepage `<ticket-link>` resolution to read `ticketUrls` first, then fall back to `ticketUrl`.
- Added empty aligned `ticketUrls` arrays to existing sample events, including the two-date Phoenix Theatre sample.
- Reason: Multi-date Phoenix Theatre listings need separate ticket links for each individual performance while still behaving as one event listing.

### Editor font previews and inline icons
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor.css`, `stuffworked-on-a-bit/rhps/data/events.json`, `assets/icons/facebook.svg`, `assets/icons/instagram.svg`, `assets/icons/tiktok.svg`, `assets/icons/email.svg`, `assets/icons/nav.svg`, `THIRD_PARTY_ASSETS.md`, `PROJECT_LOG.md`
- Changed the Site settings font list so each available font name renders using its own `font-family` as a visual reference.
- Added local Facebook, Instagram, and TikTok SVG icons from Simple Icons and recorded their CC0 source plus trademark caveat in `THIRD_PARTY_ASSETS.md`.
- Added local project-owned email and navigation SVG icons.
- Added the email icon to the sticky footer email button and brand icons to the social menu.
- Added `<navicon>` as a self-closing editor tag suggestion and preview token.
- Updated static marquee tag rendering so `<navicon>` inserts an inline navigation icon, including inside patterns such as `<directions-link><navicon>Directions</directions-link>`.
- Changed generated directions links from Google Maps URLs to OpenStreetMap search URLs and added location metadata attributes on direction anchors.
- Reason: Editors need clearer font selection previews, reusable inline direction icons, and less platform-specific map links.

### UC marquee venue-link navigation icon
- Files touched: `index.html`, `PROJECT_LOG.md`
- Added a UC-only yellow navigation icon inside the existing right-side venue website overlay link.
- Positioned the icon dead-center horizontally and near the bottom of the selected venue-link marquee box.
- Added a larger transparent circular hit area around the icon while preserving the full invisible venue website link region.
- Reason: The UC marquee needs a visible navigation cue in the right-side venue website area without changing the editor-driven text links.

### UC marquee map pin icon adjustment
- Files touched: `index.html`, `assets/icons/nav.svg`, `PROJECT_LOG.md`
- Changed the shared navigation icon from a directional arrow glyph to a map pin/location marker glyph.
- Moved the UC right-marquee venue-link icon lower, from `bottom: 6%` to `bottom: -2%`.
- Reason: The UC overlay should read as a map/location pin and sit lower in the right marquee box.

### Curran Theatre custom event card prototype
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/data/events.json`, `stuffworked-on-a-bit/rhps/data/venues.json`, `PROJECT_LOG.md`
- Added a Curran Theatre custom homepage card using the animated `curran_sign.mp4` asset as a looping sign video.
- Preserved the video's native portrait aspect ratio (`736x2140`) and avoided adding motion to the video itself.
- Added a right-side four-line dynamic text block using `curranLine1` through `curranLine4`, with per-line editor style fields and tag-link rendering.
- Added a `curran-theatre` venue record and sample Curran event so the editor and static homepage have live prototype content.
- Reason: Curran Theatre needs the same editable custom event workflow as Phoenix, with an already-animated marquee video instead of a static logo.

### Curran Theatre glitter and black-background treatment
- Files touched: `index.html`, `PROJECT_LOG.md`
- Applied `mix-blend-mode: screen` to the Curran MP4 so its black background is visually knocked out against the page instead of reading as a hard black rectangle.
- Reworked the surrounding light effect from soft dust to sharper glitter/twinkle points with stepped opacity changes and crisper highlights.
- Reason: The Curran sign should feel like glitter is catching light around it, not like a blurred dust cloud, and the MP4's black background should visually recede.

### Curran Theatre CodePen-style sparkle replacement
- Files touched: `index.html`, `assets/curran-sparkle.svg`, `PROJECT_LOG.md`
- Removed the Curran pseudo-element glitter/streak layers and their keyframes.
- Added a dedicated `.curran-sparkles` layer with generated `.curran-sparkle` particles around the sign, inspired by CodePen `Sparkle Time` (`https://codepen.io/theaemarie/pen/JOrEwd`) but using a local project-owned sparkle SVG instead of copied inline base64 art.
- Kept the effect sparkles-only: no CodePen demo text or background image was added.
- Reason: The previous Curran treatment read as streaks/dust; the new version should read as individual glitter sparkles around the animated sign.

### Curran and Phoenix black-background blend cleanup
- Files touched: `index.html`, `PROJECT_LOG.md`
- Moved the Curran sparkle layer higher, narrowed it around the sign, and raised it above the sign layer so sparkles visually integrate with the marquee instead of sitting low behind it.
- Strengthened the Curran MP4 blend/filter treatment with `mix-blend-mode: screen`, transparent background, and tighter drop shadows so the black video background reads less like a rectangle.
- Applied the same black-knockout treatment to the Phoenix JPG logo with `mix-blend-mode: screen`, higher contrast, and reduced rectangular shadow weight.
- Reason: The Curran and Phoenix assets have baked-in black backgrounds, so the page needs CSS compositing to make them visually blend into the layout until true alpha assets are generated.

### Curran and Phoenix transparent asset prototypes
- Files touched: `index.html`, `assets/phoenix-logo-alpha.png`, `curran_sign_alpha.webm`, `PROJECT_LOG.md`
- Generated `assets/phoenix-logo-alpha.png` from `Pheonix-logo.jpg` with ImageMagick using black-to-alpha transparency.
- Generated `curran_sign_alpha.webm` from `curran_sign.mp4` with ffmpeg VP9 alpha using `colorkey=0x000000:0.18:0.10` at the original `736x2140` dimensions.
- Updated the Phoenix card to use the transparent PNG instead of the source JPG.
- Updated the Curran card to load the alpha WebM first with the original MP4 as a fallback source.
- Spread the Curran sparkle layer over the sign height, moved it behind the sign on z-index, and increased the generated sparkle count from `34` to `52` smaller particles.
- Reason: The Curran and Phoenix effects need true transparent source assets instead of relying only on CSS blend modes, and the Curran sparkle effect needed to feel distributed behind the full sign.

### Custom venue event box shadow cleanup
- Files touched: `index.html`, `PROJECT_LOG.md`
- Removed rectangular radial-gradient stage backgrounds from the Phoenix and Curran custom venue sections.
- Added a stricter custom venue stage override so direct `*-stage` children of `.custom-venue-card` stay transparent and shadow-free.
- Reason: The transparent assets were working, but the surrounding event/stage wrappers still created a visible boxed shadow field around the custom venue artwork.

### Viewport-gated homepage animations
- Files touched: `index.html`, `PROJECT_LOG.md`
- Added an `IntersectionObserver` animation gate for UC, State, Phoenix, Curran, and gargoyle animated sections.
- Offscreen custom venue sections now receive `.viewport-animation-paused`, pausing CSS animations and transitions until they are near the viewport.
- Changed State and Curran venue videos from eager `src` loading to lazy `data-src` loading with `preload="none"`.
- Added `ensureVideoSources()` so State/Curran video URLs are attached only when their stage enters the viewport and animations are enabled.
- Scoped the UC marquee color overlay timer so it only runs while the UC marquee is near the viewport.
- Reason: The homepage had multiple looping videos and CSS animations running at once, which was putting avoidable load on the CPU and could hurt compatibility on lower-powered devices.

### Delta Theatre custom event card prototype
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/data/events.json`, `stuffworked-on-a-bit/rhps/data/venues.json`, `PROJECT_LOG.md`
- Added `delta-theatre` as an editor card style and venue option.
- Added `deltaLine1` through `deltaLine4` plus sibling `...Style` fields to the event save path and editor form.
- Added a shadowless Delta Theatre homepage card using `delta-marquee.mp4` as a lazy-loaded looping video.
- Added four right-side dynamic text lines with the same per-line style and tag-link rendering used by Phoenix/Curran.
- Added Delta to the viewport animation gate so its video does not load or play until the card is near the viewport.
- Added a sample `delta-theatre-sample` event and `delta-theatre` venue record for the working prototype.
- Reason: Delta Theatre is another custom venue event listing, but its marquee has important black content, so the first pass should avoid aggressive black-to-alpha removal and stay shadowless/boxless.

### Delta marquee three-line grid selector
- Files touched: `delta_marquee_grid_reference.html`, `PROJECT_LOG.md`
- Added a temporary Delta Theatre marquee selection page over `delta-marquee.mp4`.
- The selector uses a 25px grid over the native `832x1890` video dimensions.
- Added three independent selectable regions labeled Line 1, Line 2, and Line 3.
- The submit output generates `.delta-copy-line.line1`, `.line2`, and `.line3` CSS bounds plus JSON pixel/percentage measurements.
- Reason: Delta text will be embedded into the marquee itself, so we need exact three-line placement coordinates before updating the production card layout.

### Delta marquee single-box selector
- Files touched: `delta_marquee_grid_reference.html`, `PROJECT_LOG.md`
- Simplified the temporary Delta selector from three independent line selections to one selectable text-box region.
- Updated the submit output to generate a single `.delta-marquee-copy` CSS block plus one JSON bounds object.
- Reason: The Delta marquee needs one container box first; the three text lines will be placed inside that region later.

### Delta embedded marquee text box
- Files touched: `index.html`, `PROJECT_LOG.md`
- Changed the Delta homepage card from a side-by-side video/text layout to a full marquee video with embedded text.
- Applied the selected text box coordinates: left `42%`, top `55.56%`, width `38%`, height `19.84%`.
- Reduced the static Delta marquee display to three visible text lines inside the selected box.
- Updated Delta line fitting to account for text-box padding so content scales to the embedded region.
- Reason: Delta text needs to live inside the marquee artwork instead of beside it.

### Delta embedded text fit adjustment
- Files touched: `index.html`, `PROJECT_LOG.md`
- Inspected a headless Chrome screenshot crop of the Delta marquee after the selected box was applied.
- Changed Delta text lines from max-content/transform fitting to full-width centered lines inside the embedded box.
- Reduced Delta font sizing to `h2: min(8.8cqw, 17cqh)` and `h3: min(6.8cqw, 13cqh)`.
- Disabled Delta's JavaScript `--line-fit` transform calculation so the small embedded box no longer clips oversized line boxes.
- Reason: The Delta text was inside the selected box but heavily clipped; the new sizing keeps the three lines visible and centered.

### Coffin clock and Curran guest animation
- Files touched: `index.html`, `assets/coffin-clock-closed.webp`, `assets/coffin-clock-halfway.webp`, `assets/coffin-clock-open.webp`, `PROJECT_LOG.md`
- Generated optimized 8-bit WebP coffin frame assets from the three source PNGs at `720x1150`, reducing each frame to roughly `49-59KB`.
- Replaced the old Time Warp divider placeholder with a three-frame coffin clock button using closed, halfway, and open frames.
- Added scroll proximity behavior so the coffin opens from closed to halfway to open as it nears the viewport, with opacity fades between frames.
- Added click behavior so the coffin toggles open/closed manually.
- Added `barry.png` as a subtle floating special-guest image inside the Curran Theatre event card.
- Wired the Barry image link to the Curran event ticket URL when present, falling back to the Curran card anchor.
- Added the coffin clock and Barry image to viewport animation gating so their motion pauses offscreen or when animations are turned off.
- Reason: The page needed the new coffin scroll interaction and a simple animated Curran guest treatment without adding unnecessary CPU load.

### Static info polish and Delta size reduction
- Files touched: `index.html`, `static-info.txt`, `assets/indecent-exposure-logo.gif`, `THIRD_PARTY_ASSETS.md`, `PROJECT_LOG.md`
- Polished the rough static-info notes into public-facing homepage copy for cast history, regular venues, what to wear, vision, rules, shadow casts, birthdays, and virgin sacrifices.
- Kept the voice casual and cast-member-like while correcting spelling, grammar, capitalization, and draft-note phrasing.
- Added the local Indecent Exposure logo as a hover image in the cast-history callout and recorded its source/provenance.
- Removed visible placeholder decoration blocks from the static info area and let the regular venue accordion span the available section width.
- Reduced the Delta Theatre marquee display from `720px` max width to `504px` max width, a 30% reduction, while raising the embedded text sizing to `h2: min(9.6cqw, 18.5cqh)` and `h3: min(7.4cqw, 14.2cqh)`.
- Reason: The static information needed to read like finished site copy, and the Delta sign was too tall on the page while the text could afford to be slightly larger.

### Static info voice restoration and bracket-note pass
- Files touched: `index.html`, `static-info.txt`, `PROJECT_LOG.md`
- Reworked the static copy back toward the user's original phrasing instead of the smoother rewrite, while keeping spelling, grammar, capitalization, and section formatting cleaned up.
- Restored tasteful preshow-style language, including the original swearing in the vision/rules sections.
- Added bracket-note interactions for hover/reveal moments: seasonal Valentine's/Halloween decoration, the `s*xy` reveal, explanatory hover notes, the `shit`/`things` swap treatment, Rule 1's current-year text and no-fire symbols, Rule 2's toilet-paper symbol, Rule 69 notes, and shadow-cast lore notes.
- Updated `static-info.txt` to preserve the cleaned copy plus implementation notes, so the project reference keeps the intended voice and tracks which bracket ideas are active.
- Tightened the final copy pass to remove remaining over-smoothed phrasing and keep the user's original cadence.
- Reason: The previous copy pass over-smoothed the voice; the site copy should sound like BL Rocky and preserve the campy preshow tone.

### Static info section palette and easter egg refinement
- Files touched: `index.html`, `static-info.txt`, `stuffworked-on-a-bit/rhps/data/venues.json`, `assets/icons/toilet-paper.svg`, `PROJECT_LOG.md`
- Changed the regular venue accordions to venue-specific palettes: UC yellow on dark, Phoenix fire tones, and State Theatre (Modesto) red with glowing blue text.
- Added directions lines with the nav icon and addresses for UC Theatre, Phoenix Theatre, and State Theatre (Modesto), and filled Phoenix/State address data in `venues.json`.
- Changed more-information accordions to rainbow/pride-flag section colors while keeping existing orange/pink callouts readable.
- Made hover easter eggs visually subtle by removing the obvious underline/color treatment and switching the hover boxes to a simple grey title-style popup.
- Promoted "Don't Dream It, Be It" into a large white-on-black callout with a flashing rainbow background.
- Moved the Indecent Exposure hover logo to pop downward, changed history venue references back to parenthetical locations, and adjusted the Phoenix/history wording per section notes.
- Added beating heart animation for Valentine's Day, candle-flicker pumpkin animation for Halloween, local toilet-paper SVG rendering for Rule 2, and Time Warp text replacement on hover.
- Updated vision/shadow-cast/virgin-sacrifice easter eggs to use the requested hidden-text behavior and phrasing.
- Reason: The static sections needed to keep the user's original voice while making the bracketed notes feel intentional and polished on the page.

### Rules click GIF overlay
- Files touched: `index.html`, `static-info.txt`, `PROJECT_LOG.md`
- Added `no-s-with-icyhot.gif` as a click-triggered overlay inside the Rules accordion.
- Clicking any rule line now reloads the GIF with a cache-busting query string and plays a short pop/fade animation so the GIF can replay on repeated clicks.
- Updated `static-info.txt` to mark the rule-click GIF bracket note as implemented.
- Reason: The rules section was supposed to play the IcyHot GIF once when a rule is clicked, and the asset is now present in the project root.

### Editor manuals, local assistant, and no-venue event starter
- Files touched: `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor.css`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor-assistant-manual.json`, `PROJECT_LOG.md`
- Added a small editor manual JSON file covering event basics, no-venue events, multiple dates, inline tags, custom line styles, promos, and future chatbot limits.
- Added a Manuals page to the PHP editor and linked it from the dashboard/navigation.
- Added a floating Editor assistant panel that searches the local manual data in-browser first, without spending API tokens.
- Added no-venue/custom-event support in the event editor: the blank venue option is now labeled `No venue / custom event`, and selecting it reveals four styled general text lines.
- Saved `generalLine1` through `generalLine4` and their per-line style settings into event records for the future generic public card renderer.
- Added frontend behavior to show the no-venue panel only when no regular venue is selected.
- Reason: The editor-improvements notes call for a dummy-proof help/chat workflow and a guided path for events that are not attached to a regular venue; this starts the structure without wiring paid AI calls or media uploads prematurely.

### No-venue public event renderer and flyer upload
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor-assistant-manual.json`, `PROJECT_LOG.md`
- Added flyer/image upload handling to the PHP event editor for jpg, png, gif, and webp files.
- Uploaded event images save under `stuffworked-on-a-bit/rhps/editor/public/assets/uploads/events/` and write a static-page-readable path into `featuredImage`.
- Added a generic no-venue event renderer to the static homepage that shows published events with no `venueId`.
- Generic public cards support flyer-only/flyer-plus-text/text-only layouts, four styled general text lines, existing tag-link rendering, ticket buttons, calendar buttons, notes, and responsive line fitting.
- Updated the local editor manual to reflect that no-venue flyer upload and static rendering are now implemented.
- Reason: No-venue/custom events need to function on the static homepage, not just save data in the editor.

### No-venue flyer click regions
- Date: 2026-09-03 05:14:57 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor.css`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor-assistant-manual.json`, `PROJECT_LOG.md`
- Added event JSON storage for up to four `flyerClickRegions`, each with label, URL, left/top/width/height percentage values.
- Added no-venue editor controls for entering those flyer region boxes while keeping blank URL rows ignored.
- Added static homepage rendering for invisible clickable anchors over no-venue flyer images, with visible focus outlines for keyboard access.
- Updated the local assistant manual so the editor assistant can explain how flyer click regions work.
- Reason: Uploaded no-venue flyers need optional clickable sections without turning the whole flyer into one broad link.

### Curran Barry size adjustment
- Date: 2026-09-03 05:19:48 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Doubled the Curran Theatre `barry.png` special-guest image size from `clamp(72px, 14cqw, 132px)` to `clamp(144px, 28cqw, 264px)`.
- Reason: The Curran event Barry image needed to read larger in the event card.

### Coffin transparency and right-shoulder layout
- Date: 2026-09-04 02:56:41 PDT
- Files touched: `index.html`, `assets/coffin-clock-closed.webp`, `assets/coffin-clock-halfway.webp`, `assets/coffin-clock-open.webp`, `PROJECT_LOG.md`
- Regenerated the three coffin clock WebP frames from the source PNGs with edge flood-fill transparency so the white matte no longer shows on the page background.
- Cleaned the open and halfway frames so the white/gray gap between the coffin and door is transparent while preserving interior highlights such as the clock face.
- Shifted the coffin clock decoration from centered placement to a right-side shoulder placement with responsive right padding and a slightly shorter vertical footprint.
- Explicitly left-aligned the Regular Venues and More Information accordion lists and detail bodies.
- Reason: The coffin should sit visually on the right shoulder while the theater/additional-info text remains cleanly left-aligned, and the coffin art should not carry a white background.

### Coffin and Regular Venues side-by-side layout
- Date: 2026-09-04 03:02:06 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Moved the coffin clock markup into the Regular Venues layout so the venue accordion and coffin sit side by side on desktop.
- Changed `.venues-layout` to a two-column responsive grid with the venue list on the left and coffin decoration on the right.
- Added a `900px` breakpoint that collapses Regular Venues to one column and hides the coffin decoration entirely on narrower screens.
- Reason: The coffin should read as a right-shoulder decoration beside Regular Venues, but disappear once the screen is too narrow for that layout.

### Static info box style controls
- Date: 2026-09-04 03:10:42 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor.css`, `stuffworked-on-a-bit/rhps/data/site.json`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor-assistant-manual.json`, `PROJECT_LOG.md`
- Added a `STATIC_INFO_BOXES` registry for the Regular Venues and More Information boxes.
- Added collapsible Site Settings panels for each box with editable box background, font color, font type, font size, underline controls, and an optional body override textarea.
- Saved those settings into `site.json` as `staticInfoStyles` and `staticInfoContent`, with default style entries for all current venue/info boxes.
- Added homepage loading for configured fonts, static info styles, and optional body overrides, applying saved values to the matching info box ids.
- Added `<hidden>secret text</hidden>` to the editor tag suggestions and manual, plus homepage conversion into subtle hover/focus hidden notes.
- Reason: Regular venue and additional-info boxes need to be editable from the PHP editor without hand-editing the static homepage CSS.

### Delta and State marquee fit pass
- Date: 2026-09-04 07:57:12 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Reduced the Delta Theatre marquee stage cap to `max-width: min(100%, 353px)`, which is 30% smaller than the prior `504px` cap.
- Tightened State Theatre panel padding/gap and raised the panel text limits to `h2 { font-size: min(18.5cqw, 56cqh); }` and `h3 { font-size: min(11cqw, 38cqh); }`.
- Raised the State panel copy layer above the sign video/neon stack and added fallback State text in the static markup so the sign does not show blank while JSON is loading.
- Changed State event selection to prefer a published State marquee record that has actual State panel copy, avoiding older blank records.
- Verified with the static preview server, rendered DOM checks, and headless screenshots. Delta now reads smaller in page context; State rendered DOM shows the intended copy with blank lines hidden and fitted inside the panels.
- Reason: Delta was still too large compared with the other theater cards, and State text could appear blank/wonky because the renderer was selecting a blank older State record.

### 9-4 notes implementation pass
- Date: 2026-09-04 08:11:57 PDT
- Files touched: `index.html`, `start-python-server.sh`, `fonts/site-fonts.css`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor.css`, `stuffworked-on-a-bit/rhps/data/site.json`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor-assistant-manual.json`, `PROJECT_LOG.md`
- Added a Site Settings Join Cast checklist with T-crew, Props, Lights, Merch, and Rocky Horror character roles except Frank. The selected roles save to `site.json` as `joinCastOpenings`.
- Updated the public Join Cast section to read the selected roles from `site.json`, render them as role chips, set the mail link from the declared site email, and play `lazer.mp4` over the top-right of the Join Cast button before opening the email link.
- Added `./start-python-server.sh`, which regenerates `fonts/site-fonts.css` from root `fonts/` files and starts the static preview server. Added the static homepage link to that generated stylesheet.
- Added a Date / Location switch above Upcoming Shows, a small `directions.png` icon for Location mode, browser geolocation sorting, ZIP fallback routing, and outside-California error copy from `location_finder_spec.md`.
- Added word-by-word Time Warp heading animation. Local audio samples are about 4.8-5.1 seconds long; the animation delays are mapped to `Let's` 0.58s, `Do` 0.86s, `The` 1.14s, `Time` 1.47s, `Warp` 2.06s, and `Again` 3.22s, with a fallback that forces the words visible after the cadence finishes.
- Added local assistant manual entries for Join Cast openings, root font folder usage, and show sorting.
- Deferred the admin/regular-user account and email alias server plan from `9-4.txt` until the real server/email service work starts.
- Reason: `9-4.txt` requested the next prototype pass for Join Cast, local preview setup, location sorting, fonts, and Time Warp timing while keeping account/email infrastructure as future work.

### Calendar tags and Phoenix time normalization
- Date: 2026-09-04 08:43:00 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor.css`, `stuffworked-on-a-bit/rhps/data/events.json`, `PROJECT_LOG.md`
- Fixed the Phoenix Theatre sample from the invalid `-00:00` offset to Pacific daylight time: `2026-10-09T21:00:00-07:00` and `2026-10-10T21:00:00-07:00`.
- Added PHP save-time normalization so event starts, additional starts, and venue recurring dates save as `America/Los_Angeles` timestamps even if a different offset is typed.
- Changed the editor display format to omit seconds while keeping seconds in saved JSON for reliable browser parsing and calendar file generation.
- Added static-page `.ics` download generation for `<calendar-link>`, indexed `<calendar-link(2)>`, misspelled legacy variants `<calandar-link>` / `<calndar-link>`, and `<calendar-link><next-show></calendar-link>`.
- Added hover titles and `data-google-calendar-url` metadata on generated calendar anchors so we can later add a Google/Apple chooser without changing editor content.
- Added editor preview hover labels for calendar tags showing which occurrence they currently point to, plus optional suggestions when plain date-like text is detected without forcing an auto-wrap.
- Added `<br>` as a self-contained editor tag and public renderer behavior so marquee copy can break lines inside an existing field without adding another H2/H3 input.
- Reason: Phoenix needs valid Pacific event times, recurring/back-to-back events need occurrence-specific calendar links, and marquee copy needs faster formatting controls from the editor.

### Socials reel and casting label cleanup
- Date: 2026-09-04 08:52:00 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/data/site.json`, `PROJECT_LOG.md`
- Added a looping icon reel inside the footer Socials button: Instagram, Facebook, and TikTok slide up from below, hold centered, then exit upward in sequence.
- Made the reel respect the animation-off state by showing one static icon instead of looping.
- Changed the Join Cast role label from `Rocky Horror` to `Rocky` in the editor role checklist and existing `site.json` selection.
- Extended inline text rendering so standalone `<next-show>` resolves to the next matching occurrence label for the current event/venue context.
- Reason: Social links needed a more animated button treatment, and Join Cast role labels should match cast shorthand while next-show text remains tied to what is being displayed.

### Socials reel spacing adjustment
- Date: 2026-09-04 15:03:00 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Expanded the footer Socials button, gave it an explicit inline-flex layout, widened the icon reel slot, and added more gap before the label.
- Reason: The scrolling social icons were visually overlapping the `Socials` text; the reel now has dedicated space offset to the left.

### Location Sort Full Distance Ordering
- Date: 2026-09-04 15:13:00 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Changed Upcoming Shows Location mode from promoting only the nearest venue to sorting every venue card by distance from the detected/browser location.
- Updated ZIP fallback to produce approximate regional coordinates, then run the same closest-to-farthest sort instead of picking a single preferred venue.
- Left no-venue/generic event blocks after venue cards, date-sorted as a fallback.
- Reason: Location mode should show all events in closest-to-farthest order, not just move the closest venue to the top.

### Current Promo Button Shimmy
- Date: 2026-09-04 15:20:00 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Added a looping `promoButtonShimmy` animation to the Current promo footer button, with a short shake/vibration burst followed by a longer pause.
- Made the animation stop cleanly when the site-wide animations-off state is active.
- Reason: The promo button should have a subtle "click me" motion without constantly vibrating.

### White Social Icons
- Date: 2026-09-04 15:24:00 PDT
- Files touched: `assets/icons/facebook.svg`, `assets/icons/instagram.svg`, `assets/icons/tiktok.svg`, `PROJECT_LOG.md`
- Added explicit white fill to the Facebook, Instagram, and TikTok SVG assets.
- Reason: The Socials button scrolling icons were too dark against the footer button background.

### Expanded Hover Style Controls
- Date: 2026-09-04 15:35:00 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor.css`, `stuffworked-on-a-bit/rhps/data/events.json`, `stuffworked-on-a-bit/rhps/data/site.json`, `PROJECT_LOG.md`
- Added normal font-size controls to event line caret panels.
- Added an `Ideal hover` section to event line caret panels with hover color, hover font size, hover bold, hover italic, and hover underline controls.
- Added matching hover font size, bold, italic, and underline controls for Static Info box style panels.
- Updated the public homepage renderer so saved hover style values apply to venue marquee/event text and Static Info boxes.
- Backfilled existing event line styles and static info styles so hover values start from the normal/default style values.
- Reason: Hover styling needs to be independently adjustable from the editor while starting from the normal style by default.

### Static Info Body Text Source
- Date: 2026-09-04 15:45:00 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/data/site.json`, `PROJECT_LOG.md`
- Changed the public static-info renderer to use saved admin-authored body HTML from `site.json.staticInfoContent`.
- Renamed the Site Settings control from an optional body override to editable body text and updated the section wording.
- Reason: admins should edit the actual Regular Venues and More Information copy directly instead of starting from blank override boxes.

### Inline Formatting Tags
- Date: 2026-09-04 21:12:00 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor.css`, `PROJECT_LOG.md`
- Added direct editor tags for inline `color`, `font-size`, `bold`, and `italic` formatting, plus matching `:hover` variants.
- Added default tag insertion values for color and font-size tags, with clickable preview tokens that open a small value editor after a tag is declared.
- Updated the public inline renderer so event/marquee text and Static Info body content can display these inline formatting tags.
- Reason: admins need to style specific words, phrases, or sentences without creating a whole new event line or static-info style.

### 9-5 Editor and Sorting Fixes
- Date: 2026-09-05 00:05:00 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor.css`, `stuffworked-on-a-bit/rhps/data/events.json`, `stuffworked-on-a-bit/rhps/data/site.json`, `PROJECT_LOG.md`
- Added explicit horizontal text orientation rules to the UC marquee copy and per-character spans.
- Changed line/info hover font-size behavior so it only changes size when a hover size is declared; otherwise hover keeps the normal rendered size.
- Backfilled existing event line styles with visible font-size values and matching hover values so the editor fields have real reference values.
- Changed date sorting to read `data-event-date` timestamps from loaded JSON and re-sort while Date mode is active.
- Normalized existing event JSON timestamps from `THH-07:00` / `THH-08:00` to `THH:00-07:00` / `THH:00-08:00`, and corrected the Phoenix second date to `2026-10-17T21:00-07:00`.
- Added global pointer cursors for links, buttons, summaries, focusable easter eggs, and flyer click regions on the public page and editor.
- Added separate Static Info title font, title size, and title bold controls, and wired them to public accordion summaries.
- Improved inline formatting tags so single-quoted `value` attributes render too, and hover formatting tags only change their declared property.
- Reason: `9-5.txt` reported sideways UC letters, blank reference sizes, hover shrinkage, stale date order, Delta color trouble, missing pointer cursors, and fixed title fonts.

### Split Intro Skip Zones
- Date: 2026-09-05 08:25:00 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Changed the invisible intro skip area from one bottom 20% button to two bottom 30% zones.
- Left half skips the intro normally; right half skips the intro and immediately starts the page with animations off.
- Reused the same animation-off state update logic for the hidden right skip zone and the visible Animation Controls button.
- Reason: testing needs a fast path that can bypass the intro with or without all homepage animations enabled.

### 9-6 Editor and Delta Fixes
- Date: 2026-09-06 00:00:00 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor.css`, `stuffworked-on-a-bit/rhps/data/site.json`, `stuffworked-on-a-bit/rhps/data/events.json`, `PROJECT_LOG.md`
- Fixed Pacific ISO editor formatting so `HH:MM` minutes are preserved when loading existing events, and malformed old `YYYY-MM-DDTHH-07:00` values are normalized back to `YYYY-MM-DDTHH:00-07:00`.
- Added editable Join Cast heading, button text, openings label, after-list text, and style controls in Site Settings, then wired those values into the public homepage.
- Changed default Static Info body font sizing from `16px` to `1rem` and backfilled existing matching values.
- Added a Static Info display-order editor with up/down arrows and made the public Regular Venues / More Information boxes follow the saved order.
- Added the missing Delta Theatre fourth text line to the static page and tightened Delta copy spacing so four lines have room.
- Added Delta text width fitting, then corrected the line boxes to stay at `width: 100%` so scaled text does not create horizontal page overflow.
- Removed forced UC marquee writing-mode/text-orientation rules that were added while diagnosing sideways letters; the issue is now handled as a font choice.
- Reason: `9-6.txt` called out Join Cast editability, rem/em defaults, future ordering support, broken event times, Delta layout, and line 4 visibility.

### Responsive Lab
- Date: 2026-09-06 00:00:00 PDT
- Files touched: `responsive-lab.html`, `PROJECT_LOG.md`
- Added a temporary mobile responsive lab page with six selectable CSS approaches: Clean Stack, Compact Shows, Media First, Accordion Focus, Poster Rhythm, and Dense Utility.
- The lab injects CSS into an iframe preview of `index.html` instead of permanently changing the homepage layout.
- Added a `?variant=` URL hook so each option can be screenshot directly.
- Updated the iframe to load `index.html?skipIntro=1` so screenshots show the actual page layout instead of the intro animation.
- Reason: mobile layout needs human review across multiple directions before committing the final responsive CSS.

### 9-6-2 Improvements
- Date: 2026-09-08 11:16:00 PDT
- Files touched: `index.html`, `responsive-lab.html`, `responsive-previews/index.html`, `responsive-previews/clean-stack.html`, `responsive-previews/compact-shows.html`, `responsive-previews/media-first.html`, `responsive-previews/accordion-focus.html`, `responsive-previews/poster-rhythm.html`, `responsive-previews/dense-utility.html`, `assets/icons/linktree.svg`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/data/site.json`, `stuffworked-on-a-bit/rhps/data/venues.json`, `start-python-server.sh`, `scripts/backup_to_gcs.sh`, `scripts/smoketest_location_sort.py`, `PROJECT_LOG.md`
- Changed the intro skip behavior from a fully invisible bottom split zone to a visible subtle `Skip intro` text plus clicking the intro video/frame; the hidden top-right 20% zone now skips intro with animations off.
- Updated animation-off behavior so deferred sign videos load their source before freezing to a static first-frame state.
- Changed the `Don't Dream It, Be It` callout from a boxy background to rainbow-animated text with a black outline/shadow treatment.
- Added Google Analytics Measurement ID and Linktree fields to Site Settings, added a local Linktree icon, and wired public social links from `site.json`.
- Made the Socials menu open on hover while preserving click-to-pin behavior, and forced social icons to render white.
- Added local offline ZIP centroid matching for common SF/venue ZIPs; `94102` and `94110` now sort Curran Theatre before UC Theatre.
- Corrected Delta Theatre address data and route coordinates, added a vertical animated `One Night Only` Delta marquee callout, and kept Delta copy visible outside the text box where needed.
- Throttled the gargoyle cursor-light redraw loop and reduced effect intensity to lower pointer-move rendering cost.
- Added `<ticket-icon>` support to public text rendering and the editor tag menu.
- Added external-link handling so off-site `http(s)` links open in a new tab with `rel="noopener noreferrer"`.
- Added an accessibility baseline pass: no homepage images are missing `alt`, remaining interactive buttons now have explicit accessible names/titles, and the intro frame supports keyboard skip.
- Added six standalone responsive preview entry pages under `responsive-previews/` so each approach can be opened and scrolled interactively.
- Added a Google Cloud Storage backup script scaffold that zips the project and uploads to a provided `gs://` bucket via `gcloud storage cp` or `gsutil cp`.
- Extended font archive support so editor uploads and `start-python-server.sh` handle `.zip` and `.tar` font packages.
- Reason: `9-6-2.txt` called out intro behavior, accessibility metadata, Analytics, font archive uploads, responsive review pages, backup safety, social hover/Linktree, offline ZIP sorting, gargoyle performance, Delta vertical copy, ticket icons, and external tab behavior.

### 9-9 Planning Notes
- Date: 2026-09-09 10:05:00 PDT
- Files touched: `9-9-wip-framework.txt`, `PROJECT_LOG.md`
- Recorded answers and framework notes from `9-9.txt` for hosting, editor server options, admin Codex access, MFA/trusted devices, backups, pre-authorized users, private movie/photo reference tools, and a future resource/work portal.
- Reason: future implementation ideas marked with `****` / `***` needed to be preserved without writing runtime code yet.

### 9-9 Responsive Homepage Pass
- Date: 2026-09-09 10:14:00 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Replaced the old broad mobile rules with a single body-class-driven responsive mode for the homepage.
- Added automatic mobile detection plus an `Auto / Mobile / Desktop` display override control in Animation Controls, saved in local storage.
- Added mobile-only editor-fed text copies for UC, State, and Delta so only the most important sign text stays inside each marquee while extra lines move underneath on small screens.
- Adjusted mobile layouts for Phoenix and Curran so the venue image/sign becomes a small left-side icon and the editable event copy remains readable and clickable.
- Centered mobile section headers, centered the ZIP sorter area, hid side gargoyles on mobile, and kept the coffin hidden below tablet width.
- Changed the mobile Time Warp headline to a static three-line treatment so it stays readable and cannot disappear or scatter during animation timing.
- Reason: `9-9.txt` called out poor mobile responsiveness, missing/cut-off marquee text, broken-looking venue layouts, centered headers/ZIP controls, and the need for a manually forced mobile/desktop display mode.

### 9-10 WIP Framework Revision
- Date: 2026-09-10 00:00:00 PDT
- Files touched: `9-9-wip-framework.txt`, `PROJECT_LOG.md`
- Folded `9-10-blrocky.txt` into the project WIP framework.
- Reordered the framework around the chosen architecture: static public site, `edit.blrocky.com` router/lander, Google Cloud Linux VM V1, Google Cloud Storage current mirror/archive backups, and future home server/Raspberry Pi V2 with cloud fallback.
- Added planning detail for first-line router phrase protection, real editor auth, MFA, trusted-device cookies, session revocation, login history, suspicious-login reporting, and password reset codes.
- Added planning detail for current bucket mirror vs. archive backups, server boot sync, conflict handling, public/private/internal data classes, and restore testing.
- Added planning detail for account types, pre-authorized users, alias approval, `mailbot@blrocky.com`, `adminbot@blrocky.com`, and conversation-specific external email relay addresses.
- Reason: the new 9-10 notes changed the hosting direction and needed to become the project reference before implementation starts.

### Delta Marquee Vertical Callout
- Date: 2026-09-10 04:05:00 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/data/events.json`, `PROJECT_LOG.md`
- Moved Delta Theatre `deltaLine1` out of the marquee copy box and into a separate vertical callout positioned beside the sign's cut-off edge.
- Changed the vertical callout to render one character per span with staggered neon-light animation timing.
- Hid the original `deltaLine1` text row inside the marquee copy grid so lines 2-4 can use the marquee text area.
- Expanded the Delta copy region slightly and made the remaining lines wrap within the marquee panel instead of clipping off at the edge.
- Updated the current Delta event's `deltaLine1Style.fontSize` / hover size to a responsive clamp suited for the vertical callout.
- Reason: Delta's "One Night Only!" line needed to sit beside the marquee as animated vertical neon text, while the remaining text needed to stay visible inside the sign box on desktop and mobile.

### Delta Callout Size and Static State
- Date: 2026-09-10 04:12:00 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/data/events.json`, `PROJECT_LOG.md`
- Moved the Delta Theatre vertical "One Night Only!" callout farther left from the marquee text box and increased its stage footprint.
- Increased the saved Delta callout font size from `clamp(.5rem, 4.15cqw, 1rem)` to `clamp(.6rem, 5cqw, 1.2rem)`.
- Enlarged the Delta marquee nav icon independently from other inline navigation icons.
- Added an animation-off state where all Delta callout letters are fully lit and the callout is visually scaled 20% larger.
- Reason: the callout needed to sit farther out, read larger, and remain fully readable when site animations are turned off.

### State Marquee Bottom Spacing
- Date: 2026-09-10 04:20:00 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Added extra bottom margin to the State Theatre event card, with a larger spacing value in mobile display mode.
- Reason: the next event marquee was sitting close enough to State's lower text that it could read visually like the next event was part of the State marquee.

### State Gap and UC Mobile Text Alignment
- Date: 2026-09-10 04:30:00 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Doubled the State Theatre card bottom spacing to `clamp(3rem, 8vw, 6.5rem)` on desktop and `clamp(4.2rem, 20vw, 8rem)` in mobile display mode.
- Expanded the UC Theatre mobile marquee text box to `42.5%` width and `25%` height, then split the two visible lines across the top and bottom of that box.
- Increased the UC mobile in-marquee line size to `clamp(.62rem, 5.35cqw, 1.42rem)` so the first two lines no longer compress as aggressively when mobile mode activates.
- Reason: State still needed more breathing room, and UC's mobile marquee text needed to use the available vertical space now that lines 3 and 4 move below the sign.

### Event Auto-Clearing and Active Toggle
- Date: 2026-09-10 04:30:27 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor.css`, `PROJECT_LOG.md`
- Added a shared homepage event visibility check: public event cards now require `status: "published"` and at least one current/upcoming occurrence.
- Multi-date events stay visible until the last listed occurrence has passed; events without an explicit end time use a two-hour fallback end time.
- Updated UC, State, Phoenix, Curran, Delta, and no-venue event rendering to use the same active/upcoming rule.
- Added an `Active` checkbox directly to each event row in the editor list; checking it sets the event to `published`, unchecking it sets the event to `draft`.
- Reason: past events needed to clear automatically, and event activation needed to be reachable from the Events selection list without opening each event's edit submenu.

### UC Mobile Text and Button Font Fix
- Date: 2026-09-10 04:37:15 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Increased the UC Theatre mobile in-marquee text box width from `48%` and raised the visible two-line mobile font clamp to `clamp(.92rem, 7.85cqw, 2.05rem)`.
- Relaxed the UC mobile headline fit floor to `0.9` so those lines do not get squeezed down as aggressively by the width-fitting script.
- Forced mobile `.button` text, including Tickets buttons, back to the body font with normal letter spacing and a readable `1rem` size.
- Reason: UC mobile text was still unnecessarily small, and Tickets text was being damaged by decorative font behavior in mobile mode.

### UC Mobile Wrap and Copied Font Preservation
- Date: 2026-09-10 04:46:24 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Locked the first UC mobile marquee `h2` to a single line so it no longer wraps at intermediate mobile widths.
- Preserved computed font family, weight, style, and text decoration when marquee lines are cloned into the mobile-only copy block.
- Added UC mobile-copy fallback font styling plus character-span transforms so copied marquee text keeps its intended display treatment.
- Reason: the first UC mobile heading was wrapping, and the dropped-down Tickets line was losing its font styling in mobile mode.

### UC Mobile First-Line Fit Constraint
- Date: 2026-09-10 04:54:02 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Changed the UC mobile marquee fitting logic so the first `h2` can compress down to a `0.42` scale floor instead of the previous shared `0.9` floor.
- Kept the second UC mobile `h2` on a softer `0.82` fit floor because it is allowed to wrap if needed.
- Reason: the first UC mobile headline needed to remain one line while still staying constrained to the same horizontal marquee space when the viewport shrinks.

### UC Sub-500px Marquee Constraint
- Date: 2026-09-10 05:04:33 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Re-constrained the UC mobile marquee copy box to `42.5%` width with hidden overflow so the text cannot bleed outside the marquee lane.
- Disabled the progressive per-character scale only on the two UC in-marquee mobile lines, because those transforms made the visual text wider than the fit script could measure at narrow widths.
- Changed the UC mobile fit target to match the artwork: the top line fits to `72%` of the copy box and the lower line fits to `90%`.
- Added a small `.18em` left inset to the first UC mobile line so it clears the slanted left edge of the marquee art.
- Verified with a 390px-wide headless Chrome screenshot.
- Reason: below 500px wide, the first UC line was still visually overrunning the marquee surface instead of dynamically fitting within the same horizontal space.

### UC Mobile Vertical Breathing Room
- Date: 2026-09-10 05:09:41 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Added `--line-y` support to the UC marquee line transform so mobile lines can be nudged without breaking their fit scaling.
- Moved the first UC mobile `h2` down by `.14em` and the second UC mobile `h2` up by `.14em`.
- Raised the first UC mobile `h2` font clamp to `clamp(1rem, 8.35cqw, 2.18rem)` while keeping the constrained fit behavior.
- Increased the shared UC mobile marquee line-height from `.82` to `.88` to reduce top/bottom clipping.
- Verified with a 390px-wide headless Chrome screenshot.
- Reason: the two UC mobile in-marquee lines were sitting too close to the top and bottom of their clipped copy box.

### Editor Draft Recovery, Font Preview, and Switch Controls
- Date: 2026-09-10 08:56:21 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor.css`, `assets/switches/knife-switch/*`, `assets/switches/pole-switches/*`, `PROJECT_LOG.md`
- Added localStorage-backed draft recovery to editor forms so unsaved text/select/checkbox/radio changes can be restored after a refresh or editor timeout on the same browser and URL.
- Added Restore draft / Clear draft notices when an unsaved browser draft differs from the current server-rendered form values.
- Added live style sample previews to Site Settings style panels so Join Cast and static info font/color/size/weight/italic/underline changes can be seen while editing.
- Quoted generated `font-family` values for plain font names with spaces, which fixes font samples/options like `DCC - Ash` and `Dharma Punk` falling back incorrectly.
- Updated zip font upload handling to use PHP `ZipArchive` when available and fall back to the Linux `unzip` command when the PHP extension is missing; tar uploads also fall back to the system `tar` command if `PharData` cannot extract them.
- Extracted `switches.tar` into `assets/switches/` and generated transparent PNG derivatives for the knife switch frames so the control does not show the original gray JPEG background.
- Replaced the old visible animation toggle with the knife-switch control on the left side of the public page; toggling off animates to the down frame and flashes `Medusa.jpeg`, toggling on reverses the frames and flashes `screen-flash.png`.
- Added the right-side pole switch display control for Auto/Manual and Desktop/Mobile selection using the provided pole frames, while keeping the older display buttons visually hidden for compatibility.
- Verified the public switch controls with a 1280px headless Chrome screenshot and confirmed PHP syntax, active JSON files, and whitespace checks.
- Note: the archive contained frames `medusa-0`, `medusa-1`, `medusa-3`, and `medusa-4`; there was no `medusa-2`, so the 4fps knife animation currently uses the available sequence.

### Bottom Switch Controls and Sonic Burst
- Date: 2026-09-10 09:24:45 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Moved the knife animation toggle and pole display-mode switch out of the mid-page fixed overlay position and into the bottom `Animation Controls` section.
- Increased the knife switch flash-card hold time from `.5s` to `1.25s`.
- Split the pole switch visual state into independent left-pole `Auto/Manual` and right-pole `Desktop/Mobile` states, then mapped those back into the existing public display mode behavior.
- Reworked the pole labels so `Auto`, `Desktop`, `Mobile`, and `Manual` are staged on separate vertical offsets instead of overlapping in one row.
- Expanded the invisible pole hit areas into clean left/right halves so the left side controls Auto/Manual and the right side controls Desktop/Mobile.
- Added a compact sonic oscillator burst based on `handoff.md`: an SVG green CRT-style sine wave band that triggers from the pole switch toward the center of the screen, stays under `50px` tall, and fades out within `8s`.
- The oscillator respects the public animation-off state and is suppressed when animations are off.
- Verified the bottom controls and sonic burst with a settled Chrome DevTools screenshot at `#animation-controls`.

### Ticket Icon Tags, Multi-Date Calendar Tags, and Pole Cleanup
- Date: 2026-09-10 09:50:13 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `assets/icons/ticket.svg`, `PROJECT_LOG.md`
- Added `assets/icons/ticket.svg` and public inline rendering for `<ticket-icon>`, `<ticketicon>`, and `<tickitcon>` tags.
- Updated static info hydration so inline `<navicon>` and ticket icon tags become image icons after editor HTML is loaded.
- Updated public calendar link parsing to support `<calendar-link-1>`, `<calendar-link-2>`, `-next`, typo aliases `<calandar-link-*>` / `<calndar-link-*>`, and the older parenthetical index format.
- Updated the editor tag dropdown so multiple-date events expose numbered calendar tags that show which Pacific occurrence they target in the hover title.
- Refreshed editor tag previews when the primary date, additional dates, or multiple-event switch changes.
- Removed the visible `Animation Controls` heading from the public page.
- Changed the pole display switch so only the text labels toggle modes; clicking the switch image flashes the labels to direct attention.
- Tightened pole label spacing and made the sonic oscillator burst greener, brighter, and visible for more of its 8-second run.
- Verified PHP syntax, active JSON parsing, whitespace checks, and local public/editor HTTP responses.

### Merch Shop Logo and Switch Stacking
- Date: 2026-09-10 10:01:43 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/data/site.json`, `PROJECT_LOG.md`
- Lowered the knife switch and pole switch stacking layer and raised the sticky promo/email/socials footer so the sticky bottom bar remains the top interactive layer.
- Replaced the merch shop placeholder with `new_logo.png` and a bottom-right overlapping animated `Shop` text treatment.
- Added default merch settings to `site.json`: enabled state, Square shop URL, display text, and editable text styling.
- Added a Merch shop section to Site Settings with a visibility checkbox, editable link, editable text, and the shared color/font/size/bold/italic/underline style controls.
- Wired the static homepage to hydrate the merch link, visibility, text, color, font, size, and basic text styling from `site.json`.

### Numbered Ticket Tags and Rem Font Sizes
- Date: 2026-09-10 10:07:42 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor.css`, `stuffworked-on-a-bit/rhps/data/site.json`, `PROJECT_LOG.md`
- Added public support for numbered ticket tags like `<ticket-link-1>...</ticket-link-1>` and `<ticket-link-2>...</ticket-link-2>`, mapped to the matching `ticketUrls` occurrence.
- Kept plain `<ticket-link>...</ticket-link>` as the single-date/default ticket link behavior.
- Updated the editor tag dropdown so multi-date events expose numbered ticket tags alongside numbered calendar tags.
- Simplified the ticket icon editor/public tag surface back to one tag: `<ticket-icon>`.
- Converted active font-size pixel values to exact rem equivalents: `16px` to `1rem` and `12px` to `.75rem`.
- Verified no active font-size `px` values remain in `index.html`, editor PHP/CSS, or active JSON data.

### Rule 2 Throw Animation and Viewport Gating
- Date: 2026-09-10 10:16:36 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/data/site.json`, `PROJECT_LOG.md`
- Dimmed the toilet-paper rule icon so it no longer reads as overly bright against the rules panel.
- Wrapped the Rule 2 `up and back` text in `.throw-text` and added a 6-second loop: about 2 seconds readable, then the phrase moves up, tilts left, throws left, fades out, and resets.
- Added the same `.throw-text` markup to the editor-backed `rules-info` content in `site.json` so the animation survives static info hydration.
- Expanded viewport animation gating to include the logo, Time Warp heading, Join Cast section, bottom animation controls, and all static info blocks.
- Added a scroll/resize viewport activity fallback so offscreen animation regions pause and onscreen regions resume even when IntersectionObserver updates lag.
- Paused the active logo video and Time Warp cadence timer when their elements scroll out of the viewport buffer.

### Ticket Asset, Rule GIF Repair, and Delta Alpha Sign
- Date: 2026-09-10 10:40:16 PDT
- Files touched: `index.html`, `assets/icons/ticket.svg`, `assets/icons/ticket-icon-transparent.png`, `delta_marquee_alpha.webm`, `stuffworked-on-a-bit/rhps/data/site.json`, `PROJECT_LOG.md`
- Used ImageMagick to convert `ticket-icon.jpeg` into `assets/icons/ticket-icon-transparent.png` with the white JPEG background removed.
- Switched inline `<ticket-icon>` rendering to the transparent ticket image and removed the inherited invert/filter treatment that made the old icon behave inconsistently.
- Replaced the generic ticket SVG with fixed-color vector artwork so older references remain stable.
- Wrapped the Rule 2 toilet-paper icon inside the existing `.throw-text` animation so the text and TP roll throw/fade together.
- Increased Delta's vertical `One Night Only` callout spacing by widening the letter gap, line-height, and word-space gap.
- Regenerated the Delta marquee as `delta_marquee_alpha.webm` with keyed-out black background at half source resolution for safer browser playback and better blending.
- Updated the Delta marquee video source to the alpha WebM.
- Repaired `no-s-with-icyhot.gif` playback by changing the rule click handler to delegated document-level handling, so it still works after `site.json` replaces the Rules HTML.

### Ticket Icon Text-Color Mask
- Date: 2026-09-10 10:48:34 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Changed generated `<ticket-icon>` output from an inline image to an inline span so it behaves like a text glyph.
- Used `assets/icons/ticket-icon-transparent.png` as a CSS mask with `background: currentColor`, making the bitmap ticket match the surrounding text color.
- Locked the ticket icon to `em` sizing and baseline alignment so it no longer drifts around with inherited image dimensions.

### Socials Button Animation-Off Collapse
- Date: 2026-09-10 10:49:28 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Collapsed the socials icon reel out of the button layout when animations are off.
- Reduced the animation-off socials button to normal text-button sizing so it only shows `Socials` without the extra empty icon space.

### Delta Callout Position Nudge
- Date: 2026-09-10 10:50:36 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Moved the Delta Theatre vertical `One Night Only` callout up by 10 percentage points on desktop and mobile so the increased letter spacing no longer overlaps the marquee.

### Nav Icon Text-Color Mask
- Date: 2026-09-10 10:57:55 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Changed dynamic `<navicon>` output from an inline image to an inline span so it behaves like a text glyph.
- Used `assets/icons/nav.svg` as a CSS mask with `background: currentColor`, making the navigation icon inherit the surrounding text color.
- Kept the Delta marquee-specific larger nav icon sizing while preserving text-like baseline behavior.

### Local Promo Upload Workflow
- Date: 2026-09-10 11:05:12 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `PROJECT_LOG.md`
- Added a promo workflow selector with a `Local promo upload` option for locally hosted promo images and videos.
- Added local promo media upload handling for jpg, png, gif, webp, mp4, mov, m4v, and webm files.
- Added video thumbnail generation from a selected frame timestamp using `ffmpeg` when available.
- Added editor fields for local media URL, media type, thumbnail frame, thumbnail URL, click URL, retention days, created date, and expiration date.
- Retention days now auto-fill the promo expiration date from the created date when an explicit expiration is not entered.
- Wired the public promo modal to read `promos.json`, show only active/non-expired promos, and render the posted date at the top in `Mon DD` format.
- Promo click targets now render as a bottom overlay button instead of making the entire promo media area an `<a>` element.

### Deployment Folder Cleanup
- Date: 2026-09-11 03:17:59 PDT
- Files touched: `index.html`, `.gitignore`, `DEPLOYMENT_NOTES.md`, `PROJECT_LOG.md`, `start-python-server.sh`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor-assistant-manual.json`, runtime media/assets, source/reference files, notes, and tool pages.
- Reorganized root-level runtime media into `assets/media/`, UC marquee layers into `assets/marquees/uc/`, and State marquee mask layers into `assets/marquees/state/`.
- Moved original/source media into `assets/source/`, including old PNG originals, source marquee video, source ticket image, source switches archive, and time-warp audio notes.
- Moved planning notes and rough handoff text into `docs/notes/`.
- Moved old backup/reference pages and scratch logs into `docs/archive/`.
- Moved grid overlay selector pages into `tools/grid-overlays/`, marquee animation tests into `tools/marquee-tests/`, and responsive experiments into `tools/responsive-lab/`.
- Moved font source zip archives into `fonts/source-zips/` while keeping extracted web fonts and `fonts/site-fonts.css` active for the public site.
- Updated `start-python-server.sh` so font archive extraction still scans `fonts/source-zips/` after the cleanup.
- Added `.gitignore` rules for local temp files and editor JSON backup snapshots so deploy commits stay readable.
- Added `DEPLOYMENT_NOTES.md` documenting public runtime folders, workbench/reference folders, and the basic pre-deploy checks.
- Updated homepage asset paths and the editor assistant manual reference to match the new folder structure.

### Promo Upload Reliability Fix
- Date: 2026-09-11 04:37:11 PDT
- Files touched: `index.html`, `start-python-server.sh`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `PROJECT_LOG.md`
- Confirmed the current `delta-show-2026-09-10` promo was active but had empty `mediaUrl` and `thumbnailUrl`, so there was no saved promo media for the public modal to display.
- Updated public promo filtering so active promos with no media URL, video URL, or thumbnail URL are skipped instead of rendering as broken/blank cards.
- Added detailed PHP upload error messages for promo media, including oversized files, partial uploads, missing temp directory, write failures, and extension blocks.
- Made promo uploads use unique filenames when a title/date collision would otherwise overwrite an existing upload.
- Ensured the promo upload directory exists and is writable.
- Updated `start-python-server.sh` to run the PHP editor with `upload_max_filesize=64M`, `post_max_size=72M`, and a workspace-local upload temp directory at `.tmp/php-upload`.

### Delta Promo Revert And Missing-Media Guard
- Date: 2026-09-11 04:55:35 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/data/promos.json`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `PROJECT_LOG.md`
- Reverted the mistaken Delta promo data change that pointed `Delta show` at the Delta Theatre marquee video.
- Restored the promo title to `Delta show` and restored its empty media fields to match the pre-repair record.
- Moved the mistakenly generated Delta thumbnail out of runtime assets into `docs/archive/mistaken-generated-assets/`.
- Updated the public promo modal so the active `Delta show` record still appears by title/date when media fields are empty, instead of incorrectly falling through to `No active promos`.
- Added a save-time editor guard so active Local promos cannot be saved without uploaded media or an existing media/video/thumbnail URL.
- Investigation note: the workspace does not contain the uploaded Delta promo video under the editor upload directory or anywhere else in the project. The most likely failure path is that the browser autosave restored promo metadata while file inputs could not be restored, or the earlier PHP `2M` upload limit discarded the upload before it was copied into the project.

### Promo Upload Persistence And Naming
- Date: 2026-09-11 05:03:17 PDT
- Files touched: `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/editor/public/assets/editor.css`, `PROJECT_LOG.md`
- Added the temporary upload actor constant `test-user` for promo media until real user accounts exist.
- Changed saved promo media filenames to `test-user-MMDDYY-HHMM-SS.ext`, using Pacific time and preserving the uploaded file extension.
- Kept collision protection so repeated uploads in the same second append `-2`, `-3`, etc. instead of overwriting a previous upload.
- Changed new promo record ids to include a timestamp so multiple promos with the same title/date do not overwrite each other.
- Added `uploadFileName`, `originalFileName`, and `uploadedBy` metadata to promo records when media is uploaded.
- Added a `Current saved promo media` panel on the promo edit page showing stored filename, original filename, uploader, media link, video link, and thumbnail link when present.
- Added hidden persistence fields so editing an existing promo keeps the saved upload metadata unless a new media file replaces it.
- Added editor CSS for the current-upload panel.

### Promo Form Expiry Upload-Limit Fix
- Date: 2026-09-11 05:07:16 PDT
- Files touched: `stuffworked-on-a-bit/rhps/editor/public/index.php`, `PROJECT_LOG.md`
- Confirmed the form-expiry errors on promo upload were caused by the active `8080` PHP editor still running with `post_max_size=8M`.
- Server log showed `POST Content-Length of 10062700 bytes exceeds the limit of 8388608 bytes`, which caused PHP to empty `$_POST`; the missing CSRF token then appeared as a false form-expired error.
- Added an explicit content-length check in `verifyCsrf()` so oversized uploads now return a `413` upload-limit message instead of `This form expired`.
- Restarted the `8080` editor server with `upload_max_filesize=64M`, `post_max_size=72M`, and `.tmp/php-upload` as the upload temp directory.

### Editor Error Message Split
- Date: 2026-09-11 05:08:53 PDT
- Files touched: `stuffworked-on-a-bit/rhps/editor/public/index.php`, `PROJECT_LOG.md`
- Added byte formatting for upload-size error messages.
- Changed oversized POST failures to say `Upload too large`, include the request size and configured server limit, and explicitly state that it is not a form-expired error.
- Changed true CSRF/session failures to say `Form session expired` and explicitly state that it is not a file-size error.
- Updated PHP file-level upload-limit errors to include the configured `upload_max_filesize` value.

### Promo Modal Fit And Audio Processing
- Date: 2026-09-11 05:23:40 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `PROJECT_LOG.md`
- Improved the public promo modal sizing so uploaded promo media uses contained fitting with viewport-capped height on desktop and mobile.
- Added modal-open animation pausing: opening a modal pauses main-page videos, clears marquee/time-warp animation timers, and resumes viewport-gated animations after all modals close.
- Stopped forcing public promo videos to muted playback so the final generated promo file controls whether audio is present.
- Added editor promo audio controls for removing original video audio, uploading or linking supplemental audio, and looping supplemental audio when it is shorter than the promo video.
- Added ffmpeg processing for promo uploads: remove-audio creates a public `_muted` video, while supplemental audio creates a public `_supplemental` video with the audio stitched in.
- Kept original audio-bearing uploads in `stuffworked-on-a-bit/rhps/editor/private_uploads/promos/` when remove-audio is enabled, while public JSON stores only a non-public relative retained-original marker.
- Added a conditional editor reveal so supplemental audio fields only show when `Remove original video audio` is checked.
- Verified PHP syntax, promo JSON parsing, editor rendering of the new controls, static page rendering of modal-pause code, and isolated ffmpeg mute/stitch behavior.

### DevTools Warning Cleanup And Promo Close Fix
- Date: 2026-09-11 05:33:59 PDT
- Files touched: `index.html`, `fonts/site-fonts.css`, `start-python-server.sh`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `PROJECT_LOG.md`
- Captured Chrome console/log output, failed network requests, and DevTools `Audits.issueAdded` data for the static homepage and editor settings page.
- Fixed configured Google Fonts URLs so `fonts.googleapis.com/css...` sources load as stylesheets instead of being emitted as raw `@font-face src` font files.
- Removed Chrome-rejected `COPASETI.TTF` and `Roman_New_Times.otf` declarations from the generated public font stylesheet and filtered them out of future server-start regeneration/editor root-font discovery.
- Updated the promo modal close path so modal audio/video elements pause, seek back to the beginning when possible, and reload when the modal exits.
- Changed promo overlay link rendering so a button appears only when `clickUrl` or `platformUrl` exists, not when the promo only has a media file URL.
- Restyled the optional promo overlay button to sit bottom-center with 10% side spacing, 80% width, and a semi-transparent background.
- Verified after changes that the static homepage and editor settings page report zero console/log warnings, zero DevTools issues, and zero failed network requests through Chrome DevTools Protocol.

### Stardos Font Family Correction
- Date: 2026-09-11 05:37:01 PDT
- Files touched: `stuffworked-on-a-bit/rhps/data/site.json`, `PROJECT_LOG.md`
- Corrected the configured Google font family from `Stardos` to `Stardos Stencil`, matching the actual family name returned by Google Fonts.
- Preserved existing static CSS fallback usage, which already listed `Stardos Stencil` after `Stardos`.

### Promo Carousel And Local Linked Fonts
- Date: 2026-09-11 05:44:14 PDT
- Files touched: `index.html`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `stuffworked-on-a-bit/rhps/data/site.json`, `stuffworked-on-a-bit/rhps/editor/public/assets/fonts/stardos-stencil/`, `PROJECT_LOG.md`
- Changed the public promo modal from stacked promo cards to a carousel that shows one active promo at a time.
- Added Bloodyslime-styled left/right carousel arrows that appear only when more than one active promo exists.
- Updated carousel slide changes to stop audio/video on the outgoing promo card.
- Replaced modal close buttons with plain oversized Bloodyslime `X` controls instead of standard button styling.
- Added linked-font localization to the editor: direct font URLs are downloaded into local editor assets, and CSS font links download their referenced font files and rewrite the stylesheet to local URLs.
- Localized the existing Stardos Stencil Google Fonts entry into `stuffworked-on-a-bit/rhps/editor/public/assets/fonts/stardos-stencil/` and updated `site.json` to reference the local `font.css`.
- Fixed the static configured-font loader so editor-local `assets/fonts/...` sources resolve through `./stuffworked-on-a-bit/rhps/editor/public/` on the homepage.
- Verified in Chrome that `Stardos Stencil` loads locally, the switch label computes to the loaded family, the promo carousel shows one card at a time, carousel arrows are visible for the two active promos, and no console/log warnings, DevTools issues, or failed network requests are reported.

### Local Font Inventory, Switch Flash Assets, And GCloud Deployment Boundary
- Date: 2026-09-11 07:05:49 PDT
- Files touched: `index.html`, `public-data-config.js`, `stuffworked-on-a-bit/rhps/editor/public/index.php`, `scripts/gsutil-usb.sh`, `scripts/gcloud-usb.sh`, `docs/GCLOUD_DEPLOYMENT.md`, `PROJECT_LOG.md`
- Confirmed the USB already contains Google Cloud SDK 584.0.0 and `gsutil` 5.37, so no system-disk installation was performed. Added USB-backed wrapper commands that keep the Google Cloud configuration and credentials on the USB drive.
- Added the blank-by-default `public-data-config.js` deployment switch. The static homepage now reads events, venues, site settings, and promos from either the existing local JSON paths or an HTTPS bucket data prefix, and can resolve public uploaded media from a separate HTTPS asset prefix.
- Updated editor-uploaded event and promo URLs to use `PUBLIC_ASSET_BASE_URL` when configured while preserving the existing local preview paths when it is blank. Private promo originals remain outside public assets.
- Changed the knife-switch screen flashes to use `medusa.png` when animations turn off and `de-medusa.png` when animations turn back on.
- Made promo navigation visibly render literal `<` and `>` controls with titles and accessible labels, and added a visually hidden label utility so the accessibility text does not affect layout.
- Added `docs/GCLOUD_DEPLOYMENT.md` with the GitHub Pages, HTTPS bucket, editor VM, service-account, CORS, DNS, and public/private upload boundaries. The first upload remains a manual `gsutil rsync` until the VM sync job is configured.
- Verified the USB wrappers, PHP syntax, `git diff --check`, local static/editor HTTP responses, 22 editor font samples, two promo carousel cards, and both updated flash image paths in a headless browser.

### Legacy Public Upload Path Normalization
- Date: 2026-09-11 07:07:18 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Updated the bucket asset resolver to strip the old local editor prefix from existing promo and event upload URLs before applying `assetBaseUrl`, so records created before bucket deployment remain portable.

### GCloud HTTPS Deployment Clarification
- Date: 2026-09-11 07:09:42 PDT
- Files touched: `docs/GCLOUD_DEPLOYMENT.md`, `PROJECT_LOG.md`
- Updated deployment guidance to reflect the current Cloud Storage model: custom-domain HTTPS for `storage.blrocky.com` requires an external HTTPS Application Load Balancer with a managed certificate in front of the bucket.
- Added the current Cloud SDK CORS command shape and clarified that the VM should use an attached, least-privileged user-managed service account instead of a long-lived key file.

### Public GCS Sync Script
- Date: 2026-09-11 07:11:06 PDT
- Files touched: `scripts/sync-public-to-gcs.sh`, `docs/GCLOUD_DEPLOYMENT.md`, `PROJECT_LOG.md`
- Added a repeatable sync command that uploads only `data/*.json` and public editor uploads to the configured `gs://` bucket. It intentionally never includes `private_uploads`, editor backups, sessions, or the editor source tree.
- Documented that the USB-backed `gsutil` wrapper can be passed through `GSUTIL_BIN` during local setup; the VM can use its normal `gsutil` installation later.

### Squarespace DNS Setup Map
- Date: 2026-09-11 07:16:00 PDT
- Files touched: `dns-setup.txt`, `PROJECT_LOG.md`
- Recorded the current DNS state: the apex currently resolves to Squarespace, while `mobile.blrocky.com` and `home.blrocky.com` already point to `blrocky.github.io`.
- Added the target record map for apex GitHub Pages, preserved mobile/home aliases, the future HTTPS bucket load balancer at `storage.blrocky.com`, and the future editor VM at `editor.blrocky.com`.
- Added Squarespace entry steps, ordering, verification commands, and safety notes to avoid removing mail or verification records.
- Documented that Squarespace's public developer APIs do not provide a documented DNS-record management endpoint; DNS changes should be entered in the Squarespace Domains browser panel unless DNS hosting is later migrated to an API-oriented provider.

### Editor VM Bootstrap Prepared
- Date: 2026-09-11 07:18:00 PDT
- Files touched: `ops/gcloud/editor-startup.sh`, `PROJECT_LOG.md`
- Added a Debian startup script for the editor VM with nginx, PHP CLI/extensions, ffmpeg, ImageMagick, Git, rsync, unzip, and a `/srv/blrocky` deployment directory owned by `www-data`.
- The script does not expose private uploads or create DNS records; those remain separate deployment steps.
- Added `php-fpm` to the bootstrap package set so nginx can serve the editor without relying on PHP's development server.

### Editor VM Code Transfer And Web Stack
- Date: 2026-09-11 07:23:00 PDT
- Files touched: `ops/gcloud/editor-nginx.conf`, `ops/gcloud/php-fpm-blrocky.conf`, `PROJECT_LOG.md`
- Copied the current worktree to `/srv/blrocky` on `blrocky-editor-1` over the verified SSH connection, excluding local `.git`, `.tmp`, and JSON backup snapshots.
- Added an nginx editor virtual host with 72 MB upload capacity, PHP-FPM routing, hidden-file blocking, and a private-upload 404 guard.
- Added a PHP-FPM systemd environment drop-in template that keeps production mode enabled, leaves the editor password blank until explicitly set, and prepares the public asset base URL for the future storage host.

### Editor VM GitHub Deploy Key
- Date: 2026-09-11 07:27:00 PDT
- Files touched: `PROJECT_LOG.md`
- Generated a repository-scoped ED25519 deploy key on `blrocky-editor-1` at `/home/jaisonawsome/.ssh/github-blrocky-deploy`.
- Fingerprint: `SHA256:o1SVu70megDDqiynYdTfsXJJMD+SBYo/3dlQarrL7Bo`.
- The public key still needs to be added to the intended GitHub repository with **Allow write access** enabled. This checkout has no GitHub remote configured, so the repository owner/name must be identified before that final attachment step.

### Public Bucket CORS Prepared
- Date: 2026-09-11 07:29:00 PDT
- Files touched: `ops/gcloud/storage-cors.json`, `PROJECT_LOG.md`
- Added the initial Cloud Storage CORS policy for the apex, existing mobile/home aliases, and the local static preview origin. It permits only browser `GET`/`HEAD` reads of public data/assets.

### Public Sync Backup Exclusion
- Date: 2026-09-11 07:31:00 PDT
- Files touched: `scripts/sync-public-to-gcs.sh`, `PROJECT_LOG.md`
- Corrected the public sync script after its first run showed that recursive data syncing would include editor JSON backups. The script now uploads only the four live JSON files: `events.json`, `venues.json`, `site.json`, and `promos.json`.
- The accidentally uploaded `data/backups/` objects are being removed from the public bucket; private VM uploads were never included.

### Storage HTTPS Front End Provisioned
- Date: 2026-09-11 07:34:00 PDT
- Files touched: `dns-setup.txt`, `PROJECT_LOG.md`
- Created the public bucket `blrocky-public-data`, attached the sync service account, applied public-read/CORS configuration, and synced the four live JSON files plus public promo uploads.
- Provisioned the global HTTPS load-balancer path for `storage.blrocky.com`: backend bucket, URL map, Google-managed certificate, target HTTPS proxy, forwarding rule, and reserved IP `34.8.77.240`.
- Recorded `34.8.77.240` as the required Squarespace `storage` A record and `136.67.149.129` as the editor VM `editor` A record. The storage certificate remains `PROVISIONING` until the DNS record is entered.

### Editor VM Runtime Verification And Password File Wiring
- Date: 2026-09-11 07:45:00 PDT
- Files touched: `stuffworked-on-a-bit/rhps/editor/public/index.php`, `ops/gcloud/editor-startup.sh`, `ops/gcloud/php-fpm-blrocky.conf`, `PROJECT_LOG.md`
- Verified on `blrocky-editor-1` (Debian 12): nginx and PHP-FPM are active; Python 3.11, PHP 8.2 CLI/FPM, FFmpeg 5.1, ImageMagick 6, Git, rsync, unzip, curl, and the required PHP curl/mbstring/xml/zip modules are installed.
- Also verified the VM already includes Google Cloud SDK 583.0.0 and `gsutil` 5.37 for bucket synchronization.
- Added `python3-pip` and `python3-venv` to the VM bootstrap package set so a rebuild has the same Python development tooling.
- Updated the editor to read `/srv/blrocky/EDITOR_PASSWORD` through `EDITOR_PASSWORD_FILE` when no direct environment password is configured. The password file remains outside the repository and is restricted to the PHP-FPM group on the VM.
- Confirmed the editor VM uses reserved regional address `136.67.149.129`, currently `IN_USE` by `blrocky-editor-1`; a normal reboot will retain this address.

### Editor VM Password Activation And Permission Fix
- Date: 2026-09-11 07:42:57 PDT
- Files touched: `PROJECT_LOG.md` and deployed files under `/srv/blrocky` on `blrocky-editor-1`
- Applied the password-file-aware editor code and PHP-FPM drop-in to the VM, installed `python3-pip` and `python3-venv`, and corrected the transferred PHP/public-data file modes so PHP-FPM can read them.
- Kept `/srv/blrocky/EDITOR_PASSWORD` outside the repository with `root:www-data` ownership and `0640` mode; the SSH login user cannot read it, while PHP-FPM can.
- Verified the editor password flow as the `www-data` service user without printing the secret: the login POST returned HTTP `303`, confirming the configured password is accepted.

### GitHub Deploy-Key Smoke Test And Project README
- Date: 2026-09-11 07:45:00 PDT
- Files touched: `README.md`, `PROJECT_LOG.md`
- Added a concise root README describing the static public homepage, PHP editor, public storage, private VM uploads, and deployment documentation.
- Verified the VM's repository-scoped SSH key is accepted by GitHub as `blrocky/blrocky.com`. `git ls-remote` completed successfully; the repository currently has no published refs, so it returned no commit rows.
- Verified the new README and existing worktree pass `git diff --check`.

### README Published To GitHub Master
- Date: 2026-09-11 07:49:00 PDT
- Files touched: `README.md`, GitHub repository `blrocky/blrocky.com`
- Committed the README as `ae7f6d7` (`Add project README`) without staging the unrelated worktree changes.
- Published that commit to `refs/heads/master` through the VM's repository deploy key and verified the remote branch resolves to the same commit.

### Public Homepage Deployment And Repository Scrub
- Date: 2026-09-11 08:06:00 PDT
- Files touched: `README.md`, `public-data-config.js`, `dns-setup.txt`, `PROJECT_LOG.md`, GitHub repository `blrocky/blrocky.com`, and public bucket data/uploads
- Synchronized the current live JSON files and public promo uploads to `gs://blrocky-public-data`; no backup or private-upload objects were included.
- Changed the deployed public configuration to read data from `https://storage.blrocky.com/data` and public media from `https://storage.blrocky.com`.
- Published a clean public-only `master` tree containing the current `index.html`, referenced media, local fonts, `CNAME`, `.nojekyll`, README, and protective `.gitignore`. Excluded editor PHP, private uploads, backups, source archives, source font ZIPs, notes, and deployment credentials.
- Verified the remote tree contains 93 public files, the deployed index hash matches the local current index, required homepage assets exist, and excluded editor/archive paths are absent from the live tree.
- Detected that GitHub Pages' configured custom domain remains `www.blrocky.com`; documented that it must be changed to `blrocky.com` before apex DNS cutover.

### Editor VM Watchdog And Storage Recovery Check
- Date: 2026-09-11 08:34:58 PDT
- Files touched: `ops/gcloud/blrocky-healthcheck.sh`, `ops/gcloud/blrocky-healthcheck.service`, `ops/gcloud/blrocky-healthcheck.timer`, `ops/gcloud/editor-startup.sh`, `PROJECT_LOG.md`, and the corresponding installed files on `blrocky-editor-1`
- Added a systemd watchdog that runs every two minutes, checks nginx, PHP-FPM, the local editor HTTP response, root disk pressure, and public storage HTTPS. It restarts only local nginx/PHP-FPM when those local checks fail; storage failures are logged as warnings.
- Enabled the watchdog timer on `blrocky-editor-1` and verified its first run: nginx, PHP-FPM, editor HTTP, disk usage, and `storage.blrocky.com` all passed.
- Confirmed the Google-managed storage certificate is now `ACTIVE` and `https://storage.blrocky.com/data/site.json` returns HTTP 200. The remaining visible routing issue is GitHub Pages' `www` canonical redirect and DNS/cache propagation for the apex, not the VM or storage server.

### Local File Preview Data-Loading Diagnosis
- Date: 2026-09-11 08:55:00 PDT
- Files touched: `ops/gcloud/storage-cors.json`, `PROJECT_LOG.md`
- Reproduced the reported missing shows/promos by opening `index.html` directly as `file:///.../index.html`. The browser assigns that page a `null` origin and blocks the editor JSON fetches, leaving the HTML placeholders visible; this is not a missing JSON object or broken storage URL.
- Verified the supported HTTP preview at `http://127.0.0.1:8092/index.html?skipIntro=1`: the current page loads five event cards, two active promos, configured cloud data, and no JavaScript exceptions.
- Tested whether broadening bucket CORS could make `file://` fetches work. Google Cloud Storage does not return an allow-origin header for the `null` file origin, so the CORS policy was restored to the restricted HTTPS/local-server origins. Direct file opening remains unsupported; use the local HTTP URL so editor data stays live.

### Existing Promo Audio Reprocessing
- Date: 2026-09-11 09:10:00 PDT
- Files touched: `stuffworked-on-a-bit/rhps/editor/public/index.php`, `scripts/reprocess-delta-promo-vm-test.sh`, `PROJECT_LOG.md`
- Found that editing an existing local video promo with "Remove original video audio" only persisted the checkbox/metadata when no replacement file was uploaded.
- Added existing-video reprocessing support: the editor can now locate the current public promo video or retained private original, keep/reuse the original outside public access, generate a `_muted` or `_supplemental` public video with ffmpeg, regenerate the thumbnail, and update the promo record to point at the processed public asset.
- This keeps the audio-removal workflow persistent across later promo edits instead of relying on an unsynced intent flag.
- Added a repeatable VM-only smoke test for the Delta promo audio workflow. It reads the editor password on the VM at runtime and does not store or print the secret.
- Added persistent supplemental-audio URL handling: when a promo uses a remote audio URL, the editor now downloads that audio into private promo uploads before ffmpeg stitches it into the public video.
- Deployed the patched editor PHP to `blrocky-editor-1` and smoke-tested the Delta promo through the real editor form. The VM now retains the original video privately, retains the Archive.org OGG privately, and serves a public `_supplemental.mp4` plus regenerated thumbnail.
- Synced the updated VM `promos.json` and public promo media to `gs://blrocky-public-data`; public JSON now uses `Cache-Control: no-cache, max-age=0` so editor changes do not sit behind a one-hour browser/CDN cache.
- Published the current static homepage bundle to `blrocky/blrocky.com` at commit `e1f073a`, including the corrected `public-data-config.js` pointing to `https://storage.blrocky.com`.
- Attempted to publish the same bundle to `blrocky/home.blrocky.com`, but GitHub rejected the push because that repo's deploy key is read-only. The temporary `home.blrocky.com` and `mobile.blrocky.com` endpoints need write-enabled repo deploy keys or a DNS cutover away from those repos.

### Static Data Cache Busting
- Date: 2026-09-11 09:30:00 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Found that `storage.blrocky.com/data/promos.json` could still be served from an older edge/browser cache even after the bucket object had been updated and set to `Cache-Control: no-cache`.
- Updated the static homepage data loader to append a per-page-load `v=` query string to editor JSON requests. This keeps JSON fresh after editor publishes while still letting larger media files remain cacheable.

### Storage Preflight And Intro Loading
- Date: 2026-09-11 09:45:00 PDT
- Files touched: `index.html`, `PROJECT_LOG.md`
- Added a public-page storage preflight for `site.json`, `events.json`, `venues.json`, and `promos.json`. The intro now starts immediately while those editor data files load in the background.
- Cached JSON fetch promises so the preflighted data is reused by the venue, promo, generic event, and static-info renderers instead of refetching the same files repeatedly.
- Deferred the main page's heavy visual sources until storage passes: marquee images, logo/shop/decorative images, switch art, coffin art, static direction icons, and join-cast laser media. The intro video and offline/social fallback icons still load immediately.
- If storage fails, the page shows the server-offline/social fallback, stops media, and avoids hydrating the old placeholder event DOM.
- Published the change to `blrocky/blrocky.com` at commit `668e3e8` and verified a fresh clone contains the new preflight/deferred-asset code.

### Apex DNS Cutover CORS Diagnosis
- Date: 2026-09-11 10:05:00 PDT
- Files touched: `CNAME`, `ops/gcloud/storage-cors.json`, `PROJECT_LOG.md`
- After the DNS cutover, verified `storage.blrocky.com` was online and returning HTTP 200 for public JSON, while `blrocky.com` was being redirected by GitHub Pages to `www.blrocky.com`.
- Found that bucket CORS allowed `https://blrocky.com` but not `https://www.blrocky.com`, causing the new storage preflight to fail from the `www` origin and show the offline fallback.
- Updated the local CORS configuration to include `https://www.blrocky.com`, but applying it from the editor VM was blocked because the VM sync service account lacks `storage.buckets.update`.
- Changed the public `CNAME` target to `blrocky.com` so GitHub Pages should stop canonicalizing the site to `www` and use the already-allowed apex origin.
