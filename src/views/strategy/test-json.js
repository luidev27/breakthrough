var i = 0;

export default {
	pages: [
		{
			page_id: 1,
			page_title: 'Strategy',
			page_author: 0,
			page_order: 0,
			page_created_on: '2011-01-24 12:00:00',
			page_last_edited_by: 0,
			page_version: 3,
			page_status: 'published',
			page_created_by: 0,
			modules: [
				{
					id: '9b72e329-5f92-427e-b4bb-33117556af82',
					module: 'strategy',
					title: 'Strategy',
					slug: 'strategy',
					short_description: '',
					//From a WYSIWYG editor
					content: `
						<p style="line-height: 1.25; margin-bottom: 5px;"><span style="font-size: 18pt;"><strong><span style="font-family: Raleway;">Build the right team that is aligned and inspired to move together towards a common business outcome.</span></strong></span></p>
						<p>&nbsp;</p>
						<p style="line-height: 1.5;"><span style="color: #999999; font-size: 14pt;">Culture is the foundation that determines who should be on the bus, how they should act and what direction everyone should be headed in.</span></p>
					`,
					attributes: {
						order: 1,
						created_on: '2011-01-24 12:00:00',
						created_by: 'e67982b6-4267-426e-96a4-a6981f826d55',
						version_id: 'd264d374-a56a-41f6-b18c-df954437319e',
						status: 'published',
						discussion_status: 'active',

						// board_id: Moved to Board object
						// version_count: Moved to Version object,
						// comment_count: Moved to Board object,

						versions: [
							{
								id: 'd264d374-a56a-41f6-b18c-df9544373190',
								created_on: '2011-01-24 12:00:00',
								created_by: 'e67982b6-4267-426e-96a4-a6981f826d55',
							},
							{
								id: 'd264d374-a56a-41f6-b18c-df9544373191',
								created_on: '2011-01-24 12:00:03',
								created_by: 'e67982b6-4267-426e-96a4-a6981f826d55',

								//<!-- Additional fields when called directly -->

								module: 'Strategy',
								title: 'Strategy',
								slug: 'strategy',
								short_description: '',
								//From a WYSIWYG editor
								content: `
									<p style="line-height: 1.25; margin-bottom: 5px;"><span style="font-size: 18pt;"><strong><span style="font-family: Raleway;">Build the right team that is aligned and inspired to move together towards a common business outcome.</span></strong></span></p>
									<p>&nbsp;</p>
									<p style="line-height: 1.5;"><span style="color: #999999; font-size: 14pt;">Culture is the foundation that determines who should be on the bus, how they should act and what direction everyone should be headed in.</span></p>
								`,
								attributes: {
									order: 1,
									created_on: '2011-01-24 12:00:00',
									created_by: 'e67982b6-4267-426e-96a4-a6981f826d55',
									version_id: 'd264d374-a56a-41f6-b18c-df954437319e',
									status: 'published',
									discussion_status: 'active',
								},
								attachments: [],
								components: [],
								boards: []
							}
						],
					},
					attachments: [
						{
							id: 'b4f5eac8-8ddd-4f63-b13d-d8bdce140d20',
							attachment_id: '9b72e329-5f92-427e-b4bb-33117556af80',
							attachment_path: 'attachements/images/image.png',
						},
						{
							id: 'b4f5eac8-8ddd-4f63-b13d-d8bdce140d20',
							attachment_id: '9b72e329-5f92-427e-b4bb-33117556af80',
							attachment_path: 'attachements/images/image.png',

							//<!-- Additional fields when called directly -->

							attachment_type: '',
							mime_type: 'image/png',
							file_name: 'image.png',
							order: 0,
						}
					],
					components: [
						// --- Culture Header ---
						{
							id: i++,
							type: 'Header',
							title: 'Culture',
							short_description: '',
							content: '',
							attachments: [
								{
									id: undefined,
									attachment_id: undefined,
									// attachment_path: '/wp-content/uploads/2020/11/culture.png',
									attachment_path: 'https://breakthroughos.com/wp-content/uploads/2020/11/culture.png',
								},
							],
							elements: [
								'Build the right team that is aligned and inspired to move together towards a common business outcome.',
								'Culture is the foundation that determines who should be on the bus, how they should act and what direction everyone should be headed in.',
								'Learn About Culture',
							]
						},
						// Core Values
						{
							id: 'corevalues',
							type:'two-column',
							title: 'Core Values',
							short_description: 'Use our facilitated exercise to build your core values.',
							content: `
								<h2>Creating Your Core Values</h2>
								<p style="line-height:1.5;">Typography is the art and technique of arranging type to make written language legible, readable and appealing when displayed.</p>
								<p style="line-height: 1.5;">&nbsp;</p>
								<p style="line-height:1.5;">The arrangement of type involves selecting typefaces, point size, line length, line-spacing (leading), letter-spacing (tracking), and adjusting the space within letters pairs (kerning).</p>
								<p><img class="single-image" width="476" height="265" src="https://breakthroughos.com/wp-content/uploads/2020/09/product-development-consulting-476x265.jpg" srcset="https://breakthroughos.com/wp-content/uploads/2020/09/product-development-consulting-320x178.jpg 320w,https://breakthroughos.com/wp-content/uploads/2020/09/product-development-consulting-476x265.jpg 476w" data-img-src="https://breakthroughos.com/wp-content/uploads/2020/09/product-development-consulting.jpg" alt="" title="product-development-consulting"/></p>
							`,
							elements: [
								{
									title: 'Think Smart',
									content: 'Description',
								},
								{
									title: 'test',
									content: 'data',
								},
								{
									title: 'test',
									content: 'data',
								},
								{
									type: 'edit',
								},
								{
									type: 'workshop',
									title: 'Creating Your Core Values',
									workshop_type: 'corevalues',
								},
							],
							boards: []
						},
						// Vision
						{
							id: i++,
							type: 'single',
							title: 'Vision',
							short_description: '',
							content: '',
							elements: [
								{
									type: 'cell',
									content: 'To build the greatest sales enablement solutions that allows every business to achieve a seamless union between sales and marketing.',
								},
							],
							boards: []
						},
						// Mission
						{
							id: i++,
							type: 'single',
							title: 'Mission',
							short_description: '',
							content: '',
							elements: [
								{
									type: 'cell',
									content: 'To bridge the gap between marketing and sales to enable growing businesses to sell more.',
								},
							],
							boards: []
						},
						// Our Why
						{
							id: i++,
							type: 'single',
							title: 'Our Why',
							short_description: '',
							content: '',
							elements: [
								{
									type: 'cell',
									content: '...',
								},
							],
							boards: []
						},
						// Big Hairy Audacious Goals
						{
							id: i++,
							type: 'single',
							title: 'Big Hairy Audacious Goals',
							short_description: '',
							content: '',
							elements: [
								{
									type: 'cell',
									content: 'To have over 10,000 users leveraging our platform to engage with HCPs daily.',
								},
							],
							boards: []
						},
						// --- Strategy Header ---
						{
							id: i++,
							type: 'Header',
							title: 'Strategy',
							short_description: '',
							content: '',
							attachments: [
								{
									id: undefined,
									attachment_id: undefined,
									// attachment_path: '/wp-content/uploads/2020/11/strategy.png',
									attachment_path: 'https://breakthroughos.com/wp-content/uploads/2020/11/strategy.png',
								},
							],
							elements: [
								'Build the right team that is aligned and inspired to move together towards a common business outcome.',
								'Culture is the foundation that determines who should be on the bus, how they should act and what direction everyone should be headed in.',
								'Learn About Strategy',
							]
						},
						// SWOT
						{
							id: i++,
							type: 'SWOT',
							title: 'SWOT',
							short_description: '',
							content: '',
							attributes: {
								order: 0,
								created_on: '2011-01-24 12:00:00',
								last_edited_by: 0,
								version: 3,
								board_id: 1,
								discussion_status: 1,
								status: 'published',
								created_by: 0,
							},
							attachments: [],
							elements: [
								{
									type: 'multiple',
									title: 'Strengths',
									slug: 'strengths',
									inputs: [
										{
											input_title: 'Niche Market',
											input_content: 'Targeted maeket of small-medium size business within manufacturing and medical device/pharma',
										},
										{
											input_title: 'Speed',
											input_content: 'Fastest setup and implementation on the market',
										},
										{
											input_title: 'Unlimited Storage',
											input_content: 'Unlimited Storage at the lowest cost in the market',
										},
										{
											input_title: 'Simplicity',
											input_content: 'Targeted maeket of small-medium size business within manufacturing and medical device/pharma',
										},
										{
											input_title: 'Customer Service',
											input_content: 'Offer 1:1 support with no lag time',
										},
										{
											input_title: 'Flexibility',
											input_content: 'Agility and capability to customize features and internal branding of the app',
										},
										{
											input_title: 'Form Feature',
											input_content: 'Only offered by a small number of companies and offers a huge value to field rep in need of direct communication',
										},
									],
								},
								{
									type: 'multiple',
									title: 'Weaknesses',
									slug: 'weaknesses',
									inputs: [
										{
											input_title: 'Market Share',
											input_content: 'No notable market share to leverage',
										},
										{
											input_title: 'Brand Recognition',
											input_content: 'Brand is not recognized within the market',
										},
										{
											input_title: 'Brand Identity',
											input_content: 'Niche focus is not communicated effectively on website, brochure or brand statement',
										},
									],
								},
								{
									type: 'multiple',
									title: 'Opportunities',
									slug: 'opportunities',
									inputs: [
										{
											input_title: 'Showpad Decline',
											input_content: 'With a focus on small business and one of the lowest ROIs in the market, there is a huge opportunity to poach customers with the promise of better service and better pricing.',
										},
										{
											input_title: 'Small-Business Focus',
											input_content: 'Capitalize on low customer satisfaction of bigger competitors due to their inability to offer 1:1 support.',
										},
										{
											input_title: 'Niche Market',
											input_content: 'Focus on highly niche market to leverage competitive advantage and integrate niche market communication into all marketing touchpoints (ie: website, brochures, media posts)',
										},
										{
											input_title: 'Own Simplicity',
											input_content: 'Differentiate by keeping website and collateral simple and clear - avoid feature overload',
										},
										{
											input_title: 'Own Unlimited',
											input_content: 'Emphasis the simplicity of easy setup and onboarding (Focus on simplicity, not price).',
										},
										{
											input_title: 'Trade Show Tool Kit',
											input_content: 'Leverage this unique feature as a foot-in-the-door product that eventually leads them to the ML platform.',
										},
									],
								},
								{
									type: 'multiple',
									title: 'Threats',
									slug: 'threats',
									inputs: [
										{
											input_title: 'Trade Show Vertical',
											input_content: 'Competitors in the trade show space are focused solely on trade show optimization and targeting',
										},
										{
											input_title: 'Emerging Competitors',
											input_content: 'New competitors merging into the sales enablement market',
										},
										{
											input_title: 'Replicable Pricing Strategy',
											input_content: 'Easy for competitors to price match, and/or offer unlimited storage',
										},
										{
											input_title: 'Mergers & Acquisitions',
											input_content: 'Competing companies gaining increased market share and offers through M&A',
										},
									]
								},
							],
							boards: []
						},
						// Market Strategies
						{
							id: i++,
							type: 'Table',
							title: 'Market Strategies',
							short_description: '',
							content: '',
							elements: [
								{
									type: 'columns',
									title: 'Offerings',
									inputs: ['Existing','Modified','New'],
								},
								{
									type: 'rows',
									title: 'Markets',
									inputs: ['New','Expanded','Existing','Narrowed']
								},
								{
									type: 'data',
									inputs: [
										[ ['Market Development',false], ['Partial Diversification',false], ['Diversification',false] ],
										[ ['Market Expansion',false],   ['Limited Diversification',false], ['Partial Diversification',false] ],
										[ ['Market Penetration',true],  ['Product Extension',true],        ['Product Development',false] ],
										[ ['Segment Focus',true],       ['Product Specialization',true],   ['Product Focus',false] ]
									]
								},
							],
						},
						// Acquisition Strategy
						{
							id: i++,
							type: 'multiple-cell',
							title: 'Acquisition Strategy',
							short_description: '',
							content: '',
							elements: [
								{
									title: 'Freemium',
									content: 'Strong consideration and product roadmap planning should be done around providing a monkey paw package for the software that allows users free access to a valuable and simple feature.\n\nThis strategy can help develop a more grassroots acquisition strategy that leverages marketing for initial conversion and then allows your sales team to focus on upgrading customers rather than finding customers.',
									enabled: true,
								},
								{
									title: 'Free Trial',
									content: '',
									enabled: false,
								},
								{
									title: 'Demo',
									content: 'A demo process will be used as a conversion for extremely targeted marketing and a primary tool for the sales team.\n\nThe sales process should be well defined to outline each interaction and how to influence the audience most in that interaction. A smart sales and demo process will drive revenue.\n\nIf combined with a freemium option, this will additionally be utilized as a way to sell upgrade after there has already been exposure.',
									enabled: true,
								},
							]
						},
						// --- Brand Header ---
						{
							id: i++,
							type: 'Header',
							title: 'Brand',
							short_description: '',
							content: '',
							attachments: [
								{
									id: undefined,
									attachment_id: undefined,
									// attachment_path: '/wp-content/uploads/2020/11/brand.png',
									attachment_path: 'https://breakthroughos.com/wp-content/uploads/2020/11/brand.png',
								},
							],
							elements: [
								'Scale with market focus and a clear position about who you are, what makes you different, and why people should buy.',
								'',
								'Learn About Brand',
							]
						},
						// Target Audiences
						{
							id: i++,
							type: 'multiple-cell',
							title: 'Target Audiences',
							short_description: '',
							content: '',
							elements: [
								{
									type: 'two-header-list',
									title: 'Primary',
									header: 'Pharmaceuticals',
									content: 'Mid-Market (100 - 500)\nNational\nTargeting all HCPs across disciplines.',
								},
								{
									type: 'two-header-list',
									title: 'Secondary',
									header: 'Medical Equipment & Devices',
									content: 'Mid-Market (100 - 500)\nNational\nTargeting all HCPs across disciplines.',
								},
								{
									type: 'two-header-list',
									title: 'Tertiary',
									header: 'Health Provider Products',
									content: 'Mid-Market (100 - 500)\nNational\nTargeting all HCPs across disciplines.',
								},
							],
						},
						// Personas
						{
							id: i++,
							type: 'Personas',
							title: 'Personas',
							short_description: '',
							content: '',
							elements: [
								{
									type: 'primary',
									persona_name: 'Margaret Marketer',
									persona_image: 'https://breakthroughos.com/wp-content/uploads/2020/10/0zx1bdv5bny-scaled-320x320.jpg',
									persona_description: 'The marketing team and marketing leader are a primary target both in initial outreach but also through the decision making process.\n\nAt the end of the day, they don\'t want their jobs to be harder and want to prove the value of what they do.\n\nKey to winning over this audience is the features they expect/need, the on-boarding process, and support. Clear articulation and display of these elements is key.',
									persona_details: [
										[ 'Key Motivations',
											'Reduce getting bugged by people for information - protect their time.\nProve the value of their materials and work.\nHit company objectives.'
										],
										[ 'Key Buying Factors',
											'Social Proof - names and logos.'
										],
									],
								},
								{
									type: 'primary',
									persona_name: 'Sam Salesleader',
									persona_image: 'https://breakthroughos.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-7.01.24-AM-320x320.jpg',
									persona_description: 'Sales leaders will be a key audience to win over in the process. They are a little less likely than the marketing team to be actively looking for a solution but can be influenced through the right marketing to investigate.\n\nThis audience wants outcomes without a lot of friction for them and their team. They aren\'t looking for flashy features and will be won over more by an invisible solution - its so simple and intuitive that they barely notice it in their day to day life.\n\nKey to winning over this audience will be understanding how easy and seamless it will be while producing outcomes. Information that directly correlates how outcomes are produced and how simple onboarding and day-to-day usage will be is important.',
									persona_details: [
										[ 'Key Motivations',
											'Have their teams hit sales KPIs.\nWants time to be spent on outreach and engagement activities, not learning new tools.\nWants their job to be easier and reduce administrative time.\nHit company objectives.'
										],
										[ 'Key Buying Factors',
											'Social Proof - names and logos.\nTraining Process\nEase of Use'
										],
									],
								},
								{
									type: 'secondary',
									persona_name: 'IT Influencer',
									persona_image: 'https://breakthroughos.com/wp-content/uploads/2020/10/pata8xe_ivm-scaled-682x1024.jpg',
									persona_description: 'The IT influencer is always skeptical and often detail-oriented about the technology the company is selecting.\n\nThey want lots of simple integrations that don\'t require heavy lifting, need to ensure security, and do not want any solution to add to their team\'s existing workload.\n\nThey want lots of simple integrations that don\'t require heavy lifting, need to ensure security, and do not want any solution to add to their team\'s existing workload.',
									persona_details: [],
								},
								{
									type: 'secondary',
									persona_name: 'C-Suite Influencer',
									persona_image: 'https://breakthroughos.com/wp-content/uploads/2020/10/mz5a24h1jqu-scaled-682x1024.jpg',
									persona_description: 'The C-Suite leaders don\'t really have this decision on their radar but may get asked about it or have interest in what is happening.\n\nThey are most concerned if it is going to produce the outcomes the company needs and will be looking for quick points to have confidence in giving their blessing.\n\nThe key to winning over these influencers will be social proof in logos, testimonials, and stats. If it worked for companies they know, then there is no need to question it.\n\nTheir influence will be short, fast, and based more on gut instinct.',
									persona_details: [],
								},
								{
									type: 'secondary',
									persona_name: 'Other Influencers',
									persona_image: 'https://breakthroughos.com/wp-content/uploads/2020/10/sjvdxw0azqw-scaled-682x1024.jpg',
									persona_description: 'Our other influencers will come from a swath of other departments such as Medical Affairs. These influencers will only be on the periphery of the process but may interject their opinions to bring up new questions or concerns.\n\nThey key to this audience is good high-level summary information that can answer their questions and generally a brand that portrays quality, sophistication, and capability so that they can form an opinion with minimal research or interaction.',
									persona_details: [],
								},
								{
									type: 'workshop',
								},
							],
						},
						// Value Propositions
						{
							id: i++,
							type: 'multiple-row',
							title: 'Value Propositions',
							short_description: '',
							content: '',
							elements: [
								{
									type: 'value-proposition',
									title: 'HCP Engagement & Life Sciences Compliance',
									why: 'Industry expertise and specialization is a key differentiator for MobileLocker.\n\nWe define this as \'HCP Engagement\' to summarize the focus and key outcome together.\n\nThe strategy will be to portray that we understand HCPs, how to produce improved engagement, and that we understand the idiosyncrasies of medical sales such as compliance.',
									description: 'Since inception, our platform has been focused on engaging physicians. We understand the complexities of organizations selling in the life sciences space.',
									proof: 'We were spun out of a company focused on creating content for HCPs.\n\nOur platform is uniquely suited to the needs of Pharma companies.',
									aspirations: 'Hire an HCP in-house or build a board of HCPs that help improve the software outcomes.\n\nGet endorsements and public relations from industry groups.',
								},
								{
									type: 'value-proposition',
									title: 'Speed To Activity & Ease Of Use',
									why: 'We know speed to market is key, so we\'ve built our platform and approach to move fast. A key differentiator is our ability to get organizations onboarded and running quickly with ease.\n\nWe define this as \'speed to activity\' to portray that sales teams will be meeting their objectives quickly.\n\nClearly articulating the onboarding process and the ease of daily use will help marketing and sales teams become champions internally.',
									description: 'We know speed to market is key, so we\'ve build our platform and approach to move fast.',
									proof: '...',
									aspirations: 'A very robust documentation platform with multiple media types.\n\nA built in onboarding system that is extremely easy to use.\n\n24/7 chat and phone support.',
								},
								{
									type: 'value-proposition',
									title: 'Platform Flexibility & Rapid Innovation',
									why: 'While a branded platform is table stakes, our buyers want to know that they can easily tailor how it works to their needs.\n\nAs a nimble organization with deep connection to our customers, we can rapidly build and launch new features.',
									description: 'We put you in control of your HCP engagement by providing the flexibility to integrate and tailor our platform to your needs.',
									proof: '...',
									aspirations: 'We put you in control of your HCP engagement by providing the flexibility to integrate and tailor our platform to your needs.\n\nTurn-key integration to all major life sciences platforms.',
								},
							],
						},
						// Brand Voice
						{
							id: i++,
							type: 'two-column',
							title: 'Brand Voice',
							short_description: '',
							content: '',
							elements: [
								{
									type: 'two-header',
									title: 'Persona',
									header: 'We look credible, yet warm.',
									content: 'We know HCP providers and how to help you engage with them. You can see and hear our experience - its not that we know better, we\'ve just been there and know that our platform in your hands is a powerful tool.\n\nWe\'ll look casual and modern, but with a professional and sophisticated feel underlying our innovative nature.',
								},
								{
									type: 'two-header',
									title: 'Tone',
									header: 'We sound authentic and personal.',
									content: 'Our tone is about being who we are - midwesterners with drive and passion. Putting outcomes, simplicity and always doing what\'s right for our customers first.\n\nWe\'re not trying to dazzle you or talk a big game that can\'t be delivered. We get things done and we get them done right - every day, every time.',
								},
								{
									type: 'two-header',
									title: 'Language',
									header: 'We talk simply, yet savvy.',
									content: 'Our messaging is not about jargon its about simply stating the outcomes we deliver. The simplicity of our platform should be reflected in the way we talk.\n\nThe savvy side of our message is around knowing HCPs and pharma sales requirements.',
								},
								{
									type: 'two-header',
									title: 'Purpose',
									header: 'Our goal is to engage and motivate our audiences.',
									content: 'We want to engage our audience and inspire them with new ideas - not try to educate them about their industry or job.\n\nOur content and messages should motivate the audience to want to do their jobs better without friction.',
								},
							],
						},
						// Key Words & Phrases
						{
							id: i++,
							type: 'KeyWordsPhrases',
							title: 'Key Words & Phrases',
							short_description: '',
							content: '',
							elements: [
								{
									type: 'multiple',
									title: 'Words',
									slug: 'words',
									inputs: [
										'Engage / engagement',
		                'Empower / empowerment',
		                'Velocity / accelerate',
		                'Platform',
		                'Visibility',
		                'Real-time',
		                'Interaction',
		                'Optimize',
		                'Tailored',
		                'Compliant / regulated',
		                'Repository',
		                'Data-driven',
		                'Scalable',
									],
								},
								{
									type: 'multiple',
									title: 'Phrases',
									slug: 'phrases',
									inputs: [
		                'Sales acceleration.',
		                'Nimble, customizable and tailored.',
		                'Platform flexibility.',
		                'HCP engagement.',
		                'Real-time visibility.',
		                'Real-time sales insight.',
		                'Multiple touchpoints.',
		                'Remote communications.',
		                'Digital engagement.',
		                'Data-driven tools.',
		                'Digitization of content.',
		                'Tracking content delivery.',
		                'Content adaptation.',
		                'Track customer response.',
		                'Customer relationship management.',
		                'Expand channels.',
									],
								},
								{
									type: 'multiple',
									title: 'Statements',
									slug: 'statements',
									inputs: [
		                'Build more meaningful connections with healthcare providers.',
		                'Maximizes marketing efforts while increasing sales effectiveness.',
		                'Engage with customers where, when and how they prefer.',
		                'Uncover insights from each interaction.',
		                'We empower all stages of a product’s lifecycle.',
		                'Supporting face-to-face, virtual, and self-service engagement.',
		                'Start small and expand later.',
		                'Distribute compliant content to the right people.',
		                'Drive insight on content performance.',
		                'Bridging the gap between sales and marketing.',
									],
								},
							]
						},
						// Brand Hierarchy
						{
							id: i++,
							type: 'combined-cell',
							title: 'Brand Hierarchy',
							short_description: '',
							content: '',
							elements: [
								{
									type: 'two-header',
									title: 'Primary',
									header: 'Platform',
									content: 'We want to present MobileLocker as a platform that aligns marketing, sales, and HCPs through integrated features.',
								},
								{
									type: 'two-header',
									title: 'Secondary',
									header: 'Benefits',
									content: 'Upon defining MobileLocker as a platform, we want to talk about outcomes for the target audience.',
								},
								{
									type: 'two-header',
									title: 'Tertiary',
									header: 'Features',
									content: 'Features are how we produce benefits that make up our platform. We talk about features as delivery for the outcomes.',
								},
							],
						},
						// Brand Messaging
						{
							id: i++,
							type: 'multiple-row',
							title: 'Brand Messaging',
							short_description: '',
							content: '',
							elements: [
								{
									type: 'small-header',
									title: 'Short Identifier',
									content: 'A Physician Engagement Platform\n\nAn HCP Engagement Platform',
								},
								{
									type: 'small-header',
									title: 'Tag Line',
									content: 'Empower to Engage\n\nEngage. Visualize. Accelerate.',
								},
								{
									type: 'small-header',
									title: 'Flag in the Ground',
									content: 'We believe that pharma teams require a digital engagement platform built specifically for their needs and with their HCP audience in mind.',
								},
								{
									type: 'small-header',
									title: 'Elevator Pitch',
									content: 'We\'re an HCP Engagement Platform that empowers pharmaceutical sales, marketing effectiveness, visualize sales insights, and accelerate revenue growth.',
								},
								{
									type: 'small-header',
									title: 'Positioning Statement',
									content: 'We drive improved HCP engagement through our specialized platform that gets you up and running quickly with complete flexibility to accelerate your sales activity.',
								},
							],
						},
						// Benefits to Features
						{
							id: i++,
							type: 'benefits-to-features',
							title: 'Benefits to Features',
							short_description: '',
							content: '',
							elements: [
								{
									benefit_bold: 'Visibility into ever sales interaction',
									benefit_remaining_text: 'to improve sales engagement.',
									feature_list: 'Real-time view of interactions.\nVisualization of analytics.',
								},
								{
									benefit_bold: 'Compliant and current content',
									benefit_remaining_text: 'in the hands of the right people at the right times.',
									feature_list: '...',
								},
								{
									benefit_bold: 'Channel ubiquity',
									benefit_remaining_text: 'to fit existing process and create engagement through the best method possible.',
									feature_list: '...',
								},
								{
									benefit_bold: 'Content insight',
									benefit_remaining_text: 'for marketing teams to get feedback and optimize.',
									feature_list: '...',
								},
								{
									benefit_bold: 'Streamline integration',
									benefit_remaining_text: 'with medical affairs to easily convey research and scientific data.',
									feature_list: '...',
								},
								{
									benefit_bold: 'Make existing systems and processes more powerful.',
									benefit_remaining_text: '',
									feature_list: 'Integration with all major CRMs.',
								},
							],
						},
						// --- Brand Header ---
						{
							id: i++,
							title: 'Brand',
							short_description: '',
							content: '',
							type: 'Header',
							attachments: [
								{
									id: undefined,
									attachment_id: undefined,
									// attachment_path: '/wp-content/uploads/2020/11/brand.png',
									attachment_path: 'https://breakthroughos.com/wp-content/uploads/visualcomposer-assets/templates/5f64de5e37b331.15512839/assets/elements/RouteTrackingPNGicon.png',
								},
							],
							elements: [
								'Scale with market focus and a clear position about who you are, what makes you different, and why people should buy.',
								'',
								'Learn About Brand',
							]
						},
					],
					boards: [
						{
							id: 'd264d374-a56a-41f6-b18c-df9544373190',
							created_on: '2011-01-24 12:00:00',
							created_by: 'e67982b6-4267-426e-96a4-a6981f826d55',
							last_updated_on: '2011-01-24 12:00:00',
							comment_count: 153,
						},
						{
							id: 'd264d374-a56a-41f6-b18c-df9544373190',
							created_on: '2011-01-24 12:00:00',
							created_by: 'e67982b6-4267-426e-96a4-a6981f826d55',
							last_updated_on: '2011-01-24 12:00:00',
							comment_count: 153,

							//<!-- Additional fields when called directly -->

							collaborators: [
								{
									id: 0,
									user_name: 'John Doe',
									display_picture_id: '9b72e329-5f92-427e-b4bb-33117556af80',

									//<!-- Additional fields when called directly -->

									email: 'servers@insivia.com',
									password: '$1$O3JMY.Tw$AdLnLjQ/5jXF9.MTp3gHv/', //MD5
									email_verified_at: '2011-01-24 12:00:00',
									attempt: 3,
									user_status: 'active',
									client_secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
									lock_count: 0,
									lock_time: '2011-01-24 12:00:00',
									max_lockout_count: 3,
									max_lockout_minutes: 15,
									last_user_managed: undefined, //Not sure what this is.
									last_account_used: undefined, //Not sure what this is.
									last_changed_password: '2011-01-24 12:00:00',
									created_on: '2011-01-24 12:00:00',
									archived_date: null,
								}
							],
							comments: [
								{
									id: '5fe7937b-01b7-4ddc-8dac-26da9cae45ae',
									comment_id: '9b72e329-5f92-427e-b4bb-33117556af8e',
									user_id: 'e67982b6-4267-426e-96a4-a6981f826d55',
									content: 'Test Comment',
									has_children: false,
									parent_id: null,

									//<!-- Additional fields when called directly -->

									author_ip: '127.0.0.1',
									comment_type: '',
									child_comments: [
										{
											id: '5fe7937b-01b7-4ddc-8dac-26da9cae45ae',
											comment_id: '9b72e329-5f92-427e-b4bb-33117556af8e',
											user_id: 'e67982b6-4267-426e-96a4-a6981f826d55',
											content: 'Test Comment',
											has_children: false,
											parent_id: null,
											author_ip: '127.0.0.1',
											comment_type: '',
											child_comments: []
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
}
