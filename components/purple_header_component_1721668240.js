/* Summary: HTML file that describes the header section including:
1. Site branding with a logo on the left.
2. Desktop navigation menu with links to different pages in the middle.
3. Desktop sign-in and sign-up links on the right.
*/ 

Vue.component("purple_header_component_1721668240", {
    template: `
    <header class="w-full z-30" id="header-section-container">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 bg-white">
            <div class="flex items-center justify-between h-16 md:h-20">
    
                <div id="site-branding" class="flex-1"><a id="logo-link" class="inline-flex" href="index.html" aria-label="Cruip"><img id="logo-image" class="max-w-none" src="./images/logo.svg" width="38" height="38" alt="Stellar"></a></div>
    
                <nav id="desktop-navigation" class="hidden md:flex md:grow">
    
                    <ul id="desktop-menu-links" class="flex grow justify-center flex-wrap items-center">
                        <li><a id="Explore Ethereum-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-slate-300 hover:text-white" href="Explore Ethereum.html">Explore Ethereum</a></li>
                        <li><a id="New Transactions-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-slate-300 hover:text-white" href="New Transactions.html">New Transactions</a></li>
                        <li><a id="Smart Contracts-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-slate-300 hover:text-white" href="Smart Contracts.html">Smart Contracts</a></li>
                        <li><a id="Analytics-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-slate-300 hover:text-white" href="Analytics.html">Analytics</a></li>
                        <li><a id="Developer Tools-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-slate-300 hover:text-white" href="Developer Tools.html">Developer Tools</a></li>
                    </ul>
    
                </nav>
    
                <ul id="desktop-sign-in-links" class="flex-1 flex justify-end items-center">
                    <li><a id="sign-in-link" class="font-medium text-sm whitespace-nowrap transition duration-150 ease-in-out text-slate-300 hover:text-white" href="signin.html">Sign in</a></li>
                    <li class="ml-6"><a id="sign-up-link" class="btn-sm transition duration-150 ease-in-out w-full group relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none text-slate-300 hover:text-white [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box]" href="signup.html"><span class="relative inline-flex items-center">Sign up <span id="sign-up-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-purple-500">-&gt;</span></span></a></li>
                </ul>
    
                <div id="mobile-menu" class="md:hidden flex items-center ml-4" x-data="{ expanded: false }">
    
                    <button id="hamburger-button" class="hamburger" :class="{ 'active': expanded }" @click.stop="expanded = !expanded" aria-controls="mobile-nav" :aria-expanded="expanded">
                        <span class="sr-only">Menu</span>
                        <svg id="hamburger-icon" class="w-5 h-5 fill-current transition duration-150 ease-in-out text-slate-300 hover:text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <rect y="2" width="20" height="2" rx="1" />
                            <rect y="9" width="20" height="2" rx="1" />
                            <rect y="16" width="20" height="2" rx="1" />
                        </svg>
                    </button>

                    <nav id="sidebar" class="md:hidden fixed left-0 bottom-0 top-16 md:top-20 w-64 px-4 py-6 bg-slate-900 border-r border-slate-700 overflow-y-auto">
                        <ul id="sidebar-links" class="space-y-2">
                            <li><a id="sidebar-home-link" class="flex items-center space-x-2 text-slate-300 hover:text-white transition duration-150" href="/"><span class="text-lg">🏠</span><span>Home</span></a></li>

                            <li><a id="sidebar-about-link" class="flex items-center space-x-2 text-slate-300 hover:text-white transition duration-150" href="/about"><span class="text-lg">ℹ️</span><span>About</span></a></li>

                            <li><a id="sidebar-contact-link" class="flex items-center space-x-2 text-slate-300 hover:text-white transition duration-150" href="/contact"><span class="text-lg">✉️</span><span>Contact</span></a></li>
                        </ul>
                    </nav>

                    <nav id="mobile-nav" class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" x-ref="mobileNav" :style="expanded ? 'max-height: ' + $refs.mobileNav.scrollHeight + 'px; opacity: 1' : 'max-height: 0; opacity: .8'" @click.outside="expanded = false" @keydown.escape.window="expanded = false" x-cloak>

    
                </div>
    
            </div>
        </div>
    </header>`,
        data() {
            return {
                expanded: false, 
                tab: null,
            };
        },
    });
                    