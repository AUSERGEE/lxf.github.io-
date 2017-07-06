(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-duihua" viewBox="0 0 1024 1024">'+""+'<path d="M326.4 348h387.2v67.2H326.4zM326.4 494.4h387.2v67.2H326.4z" fill="#B078E2" ></path>'+""+'<path d="M326.4 870.4c-4 0-8-0.8-11.2-2.4-10.4-4-17.6-12.8-20-23.2l-18.4-91.2H184c-40 0-72-32-72-72V229.6c0-40 32-72 72-72h667.2c40 0 72 32 72 72v451.2c0 40-32 72-72 72H496.8L345.6 864c-5.6 4-12 6.4-19.2 6.4zM184 221.6c-4 0-8 4-8 8v451.2c0 4 4 8 8 8h118.4c15.2 0 28 10.4 31.2 25.6l14.4 68 120-87.2c5.6-4 12-6.4 19.2-6.4h364.8c4 0 8-4 8-8V229.6c0-4-4-8-8-8H184z" fill="#B78CDD" ></path>'+""+"</symbol>"+""+'<symbol id="icon-baoxiu" viewBox="0 0 1024 1024">'+""+'<path d="M505.498 921.91c-3.195 0-6.389 0-10.649-1.064-349.307-87.327-383.385-399.36-383.385-402.555v-380.191l386.58-71.353c23.429-4.261 45.793 10.649 50.053 34.079s-10.649 45.793-34.079 50.053l-317.358 58.573v302.45c3.195 24.494 39.404 256.654 319.488 326.943 22.363 5.325 36.21 28.754 30.885 52.184-5.325 18.105-22.363 30.885-41.534 30.885z" fill="#8DEF73" ></path>'+""+'<path d="M516.148 921.91c-19.169 0-36.21-12.78-41.534-31.949-5.325-22.363 8.519-45.793 30.885-52.184 280.084-69.223 316.293-301.383 319.488-326.943v-301.383l-316.293-58.573c-23.429-4.261-38.338-26.624-34.079-50.053s26.624-38.338 50.053-34.079l385.516 71.353v379.125c0 3.195-34.079 316.293-383.385 402.555-4.261 2.13-7.455 2.13-10.649 2.13z" fill="#8DEF73" ></path>'+""+'<path d="M474.539 602.422c-11.714 0-22.363-4.261-30.885-13.844l-97.977-104.366c-15.975-17.038-14.91-43.662 2.13-60.703 17.038-15.975 43.662-14.91 60.703 2.13l70.286 74.547 187.432-158.68c18.105-14.91 44.729-12.78 59.637 5.325s12.78 44.729-5.325 59.637l-218.317 186.368c-8.519 6.389-18.105 9.586-27.688 9.586z" fill="#6EEC4C" ></path>'+""+"</symbol>"+""+'<symbol id="icon-shoukuan" viewBox="0 0 1024 1024">'+""+'<path d="M654.449 823.25l-290.611-98.246h-155.212v-95.769h160.166c7.43 0 14.861 0.826 22.291 3.303l274.099 92.467c11.559 4.127 17.338 15.686 13.209 27.245l-23.942 71.001z" fill="#F9C86E" ></path>'+""+'<path d="M208.626 716.748h127.967v95.769h-127.967v-95.769z" fill="#F9C86E" ></path>'+""+'<path d="M487.678 893.427l-239.424-109.805 24.768-53.663 246.854 112.281 386.38-139.526c18.989-6.605 39.629 3.303 46.233 21.465l1.651 4.953c3.303 9.907-1.651 19.815-10.733 23.942l-397.113 142.829c-18.989 6.605-40.454 5.779-58.618-2.477z" fill="#F9C86E" ></path>'+""+'<path d="M377.048 808.39c-4.953 6.605-14.861 8.256-21.465 2.477l-34.675-28.071 3.303-4.127c2.477-2.477 3.303-6.605 3.303-9.907v-75.955c0-8.256 6.605-15.686 15.686-15.686h28.895c8.256 0 15.686 6.605 15.686 15.686v96.595c0 3.303-0.826 6.605-3.303 9.082l-7.43 9.907zM98.821 582.175h88.339c8.256 0 15.686 6.605 15.686 15.686v255.936c0 8.256-6.605 15.686-15.686 15.686h-88.339c-8.256 0-15.686-6.605-15.686-15.686v-255.936c0-9.082 6.605-15.686 15.686-15.686z" fill="#F9C86E" ></path>'+""+'<path d="M666.008 601.164h-52.839c-8.256 0-15.686-6.605-15.686-15.686v-215.481c0-2.477-0.826-5.779-2.477-8.256l-23.942-37.977-99.898-160.166c-4.127-7.43-2.477-16.512 4.953-21.465l45.407-28.895c7.43-4.953 16.512-2.477 21.465 4.953l135.399 220.434c1.651 2.477 2.477 4.953 2.477 8.256v239.424c0 7.43-6.605 14.861-14.861 14.861z" fill="#F2D857" ></path>'+""+'<path d="M618.122 340.276c-7.43-4.953-9.907-14.861-4.953-23.117l123.84-197.318c4.953-7.43 14.861-9.907 23.117-4.953l42.931 26.419c7.43 4.953 9.907 14.861 4.953 23.117l-123.84 197.318c-4.953 7.43-14.861 9.907-23.117 4.953l-42.931-26.419z" fill="#F2D857" ></path>'+""+'<path d="M449.701 328.717c0-9.082 7.43-16.512 16.512-16.512h331.065c9.082 0 16.512 7.43 16.512 16.512v50.362c0 9.082-7.43 16.512-16.512 16.512h-331.065c-9.082 0-16.512-7.43-16.512-16.512v-50.362zM449.701 447.604c0-9.082 7.43-16.512 16.512-16.512h331.065c9.082 0 16.512 7.43 16.512 16.512v50.362c0 9.082-7.43 16.512-16.512 16.512h-331.065c-9.082 0-16.512-7.43-16.512-16.512v-50.362z" fill="#F2D857" ></path>'+""+"</symbol>"+""+'<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">'+""+'<path d="M276.533 635.2c-20.8 0-39.2-16.8-40-39.2s16.8-40.8 39.2-40.8c43.2-0.8 404.8-14.4 460-12.8 11.2-6.4 32-34.4 46.4-59.2l60-110.4c20.8-36.8 24-54.4 24-60.8-3.2-0.8-7.2-0.8-8 0h-601.6c-22.4 0-40-18.4-40-40s18.4-40 40-40h592c14.4-0.8 58.4-2.4 83.2 34.4 34.4 50.4-7.2 123.2-20.8 146.4l-60 109.6c-20.8 39.2-64.8 104-118.4 101.6-24-2.4-288 7.2-454.4 12.8-0.8-2.4-1.6-1.6-1.6-1.6z" fill="#F76E93" ></path>'+""+'<path d="M334.133 756.8c-12.8 0-27.2-4-39.2-11.2-44.8-27.2-62.4-88-64.8-102.4 0-0.8 0-2.4-0.8-3.2l-56-396v-2.4c-3.2-36.8-16-51.2-23.2-52.8h-52.8c-7.2 0-14.4-3.2-19.2-8.8-28-32.8-4-71.2 28-71.2h50.4c4 0 87.2 6.4 98.4 125.6l55.2 392.8c6.4 24 18.4 42.4 27.2 48 3.2-0.8 6.4-0.8 8.8-0.8l461.6 0.8c22.4 0 42.4 18.4 40 40-4 32.8-18.4 40-40 40l-456-0.8c-8 1.6-12.8 2.4-17.6 2.4zM151.733 188.8z" fill="#F57E9E" ></path>'+""+'<path d="M328.533 858.4c0 30.928 25.072 56 56 56s56-25.072 56-56c0-30.928-25.072-56-56-56-30.928 0-56 25.072-56 56z" fill="#F57E9E" ></path>'+""+'<path d="M622.933 858.4c0 30.928 25.072 56 56 56s56-25.072 56-56c0-30.928-25.072-56-56-56-30.928 0-56 25.072-56 56z" fill="#F57E9E" ></path>'+""+"</symbol>"+""+'<symbol id="icon-dianhua" viewBox="0 0 1024 1024">'+""+'<path d="M411.884 880.508c-53.638 0-79.644-17.067-88.584-23.568-17.879-12.19-32.508-34.133-33.321-34.946l-4.063-4.063-2.438-4.876c-13.003-30.883-29.257-35.759-32.508-37.384h-0.813c-41.448-16.254-62.578-6.502-63.39-5.689l0.813-0.813-26.006-27.632c-5.689-7.314-3.251-17.067 4.876-21.13 18.692-8.94 54.451-17.879 104.025 1.625 8.94 3.251 43.886 24.381 60.14 67.454 5.689 4.876 16.254 14.629 25.194 20.317l3.251 2.438c5.689 4.063 51.2 28.444 169.041-13.003 16.254-5.689 34.946 4.063 37.384 22.756 1.625 13.816-6.502 26.819-19.505 30.883-56.076 20.317-99.962 27.632-134.095 27.632zM252.595 775.67z" fill="#FA8559" ></path>'+""+'<path d="M652.443 914.642l-4.063-2.438c-13.003-5.689-329.956-161.727-442.921-598.959v-3.251c-1.625-4.063-38.197-143.035 146.286-234.057l17.879-8.94 14.629 13.816c4.876 3.251 134.908 119.467 154.413 259.251l2.438 20.317-18.692 9.752c-8.94 4.063-57.702 29.257-89.397 37.384 35.759 74.768 104.838 199.924 172.292 256 52.825-80.457 73.956-81.27 84.521-81.27 8.94 0 18.692 3.251 25.194 9.752 15.441 11.378 105.651 82.083 182.044 186.108l14.629 19.505-17.067 17.067c-4.876 4.876-115.403 117.029-236.495 99.962h-5.689zM262.348 301.867c99.962 382.781 371.403 538.006 407.975 557.511 66.641 6.502 133.283-40.635 164.165-66.641-56.889-71.517-117.841-123.53-143.848-144.66-13.003 14.629-34.946 43.886-52.825 73.956l-14.629 24.381-24.381-15.441c-119.467-69.892-229.994-323.454-234.057-334.019l-15.441-34.946 65.016-9.752c12.19-1.625 39.822-13.816 63.39-25.194-18.692-82.083-72.33-148.724-97.524-177.168-119.467 66.641-118.654 141.41-117.841 151.975z" fill="#FFA483" ></path>'+""+"</symbol>"+""+'<symbol id="icon-dingdan" viewBox="0 0 1024 1024">'+""+'<path d="M626.255 920.031h-409.592c-45.19 0-81.726-36.537-81.726-81.726v-666.309c0-45.19 36.537-81.726 81.726-81.726h599.005c45.19 0 81.726 36.537 81.726 81.726v469.204c0 21.152-17.307 38.46-38.46 38.46s-38.46-17.307-38.46-38.46v-469.204c0-2.884-1.923-4.807-4.807-4.807h-599.005c-2.884 0-4.807 1.923-4.807 4.807v666.309c0 2.884 1.923 4.807 4.807 4.807h409.593c21.152 0 38.46 17.307 38.46 38.46s-17.307 38.46-38.46 38.46z" fill="#7BA7F9" ></path>'+""+'<path d="M625.294 920.031c-21.153 0-38.46-17.307-38.46-38.46l0.962-183.644c0-35.574 14.422-55.766 25.96-67.304 15.384-14.422 36.537-22.114 59.613-21.152l173.067 0.962c21.152 0 37.498 10.576 45.19 27.882 6.73 17.307 1.923 36.537-12.499 51.921l-223.064 217.295c-3.846 3.846-7.692 5.769-11.538 7.692-5.769 2.884-12.499 4.807-19.23 4.807zM670.483 685.428c-1.922 0-2.884 0-2.884 0.961 0 0-1.922 3.846-1.922 12.499l-0.962 93.264 107.687-105.764-99.033-0.962c-0.962 0.962-1.922 0.962-2.884 0z" fill="#7BA7F9" ></path>'+""+'<path d="M557.028 377.754h-221.142c-14.422 0-25.96-11.538-25.96-25.96v-25.96c0-14.422 11.538-25.96 25.96-25.96h221.142c14.422 0 25.96 11.538 25.96 25.96v25.96c0 14.422-11.538 25.96-25.96 25.96zM672.406 545.052h-338.443c-14.422 0-25.96-11.538-25.96-25.96v-25.96c0-14.422 11.538-25.96 25.96-25.96h338.443c14.422 0 25.96 11.538 25.96 25.96v25.96c0 14.422-11.538 25.96-25.96 25.96z" fill="#5A8FF4" ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)