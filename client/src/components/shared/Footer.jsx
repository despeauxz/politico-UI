import React from 'react';

const Footer = () => {
    return (
        <main classNameName="w-full">
            <div className="bg-white border-t-2 border-grey-lighter">
                <div className="container mx-auto py-6 my-6">
                    <div className="flex">
                        <div className="w-1/4">
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-101 331 132 132" width="54" height="54" aria-label="Slack" className="c-nav--footer__svgicon c-slackhash svg-replaced" shapeRendering="geometricPrecision"><path d="M-16.7 343.1c-1.9-5.7-8-8.8-13.7-7-5.7 1.9-8.8 8-7 13.7l28.1 86.4c1.9 5.3 7.7 8.3 13.2 6.7 5.8-1.7 9.3-7.8 7.4-13.4 0-.2-28-86.4-28-86.4z" fill="#ECB32D"></path><path d="M-60.2 357.2c-1.9-5.7-8-8.8-13.7-7-5.7 1.9-8.8 8-7 13.7l28.1 86.4c1.9 5.3 7.7 8.3 13.2 6.7 5.8-1.7 9.3-7.8 7.4-13.4 0-.2-28-86.4-28-86.4z" fill="#63C1A0"></path><path d="M18.7 414.6c5.7-1.9 8.8-8 7-13.7-1.9-5.7-8-8.8-13.7-7l-86.5 28.2c-5.3 1.9-8.3 7.7-6.7 13.2 1.7 5.8 7.8 9.3 13.4 7.4.2 0 86.5-28.1 86.5-28.1z" fill="#E01A59"></path><path d="M-56.5 439.1c5.6-1.8 12.9-4.2 20.7-6.7-1.8-5.6-4.2-12.9-6.7-20.7l-20.7 6.7 6.7 20.7z" fill="#331433"></path><path d="M-12.9 424.9c7.8-2.5 15.1-4.9 20.7-6.7-1.8-5.6-4.2-12.9-6.7-20.7l-20.7 6.7 6.7 20.7z" fill="#D62027"></path><path d="M4.5 371.1c5.7-1.9 8.8-8 7-13.7-1.9-5.7-8-8.8-13.7-7l-86.4 28.1c-5.3 1.9-8.3 7.7-6.7 13.2 1.7 5.8 7.8 9.3 13.4 7.4.2 0 86.4-28 86.4-28z" fill="#89D3DF"></path><path d="M-70.6 395.5c5.6-1.8 12.9-4.2 20.7-6.7-2.5-7.8-4.9-15.1-6.7-20.7l-20.7 6.7 6.7 20.7z" fill="#258B74"></path><path d="M-27.1 381.4c7.8-2.5 15.1-4.9 20.7-6.7-2.5-7.8-4.9-15.1-6.7-20.7l-20.7 6.7 6.7 20.7z" fill="#819C3C"></path></svg>
                            </a>
                        </div>

                        <div className="flex-grow">
                            <div className="flex font-sans text-xs pl-6">
                                <div className="w-1/4">
                                    <h4 className="uppercase py-4 text-grey-darker">company</h4>
                                    <ul className="list-reset text-grey-dark">
                                        <li className="py-2">About Us</li>
                                        <li className="py-2">Careers</li>
                                        <li className="py-2">Blog</li>
                                        <li className="py-2">Press</li>
                                        <li className="py-2">Brand Guidelines</li>
                                    </ul>
                                </div>
                                <div className="w-1/4">
                                    <h4 className="uppercase py-4 text-grey-darker">product</h4>
                                    <ul className="list-reset text-grey-dark">
                                        <li className="py-2">Why Slackish?</li>
                                        <li className="py-2">Enterprise</li>
                                        <li className="py-2">Customer Stories</li>
                                        <li className="py-2">Pricing</li>
                                        <li className="py-2">Security</li>
                                    </ul>
                                </div>
                                <div className="w-1/4">
                                    <h4 className="uppercase py-4 text-grey-darker">resources</h4>
                                    <ul className="list-reset text-grey-dark">
                                        <li className="py-2">Download</li>
                                        <li className="py-2">Help Center</li>
                                        <li className="py-2">Guides</li>
                                        <li className="py-2">Partners</li>
                                        <li className="py-2">Events</li>
                                        <li className="py-2">App Directory</li>
                                        <li className="py-2">API</li>
                                        <li className="py-2">Gartner Report</li>
                                        <li className="py-2">eBooks</li>
                                    </ul>
                                </div>
                                <div className="w-1/4">
                                    <h4 className="uppercase py-4 text-grey-darker">extras</h4>
                                    <ul className="list-reset font-sans text-grey-dark">
                                        <li className="py-2">Podcast</li>
                                        <li className="py-2">Slackish Shop</li>
                                        <li className="py-2">Slackish at Work</li>
                                        <li className="py-2">Slackish Fund</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Footer;
