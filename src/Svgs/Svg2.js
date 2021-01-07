import React from 'react'
import useWebAnimations from '@wellyshen/use-web-animations';
import "./index.css";
export const Svg2 = () => {
  
    const BouceEffect = useWebAnimations({keyframes:[{ transform: 'translateX(-5px)'},{ transform: 'translateX(5px)' }],timing:{iterations:Infinity,direction:"alternate",duration:800}});
    const jumpingEffect = useWebAnimations({keyframes:[{ transform: 'translateY(0px)'},{ transform: 'translateY(10px)' }],timing:{direction:'alternate',iterations:Infinity,duration:1000}})
    const rotatingEffect = useWebAnimations({keyframes:[{ transform: 'rotate(0deg)', transformOrigin: 'center', transformBox: 'fill-box' },{ transform: 'rotate(360deg)', transformOrigin: 'center', transformBox: 'fill-box' }],timing:{direction:'normal',iterations:Infinity,duration:2500}})
    const rotatingEffect2 = useWebAnimations({keyframes:[{ transform: 'rotate(0deg)', transformOrigin: 'center', transformBox: 'fill-box' },{ transform: 'rotate(360deg)', transformOrigin: 'center', transformBox: 'fill-box' }],timing:{direction:'normal',iterations:Infinity,duration:2500}})
 
    return (
        <div>
            
            <svg width="745" className="Total1" height="562" viewBox="0 0 745 562" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="undraw_Ride_a_bicycle_2yok 1" clipPath="url(#clip0)">
<g id="playing" ref={BouceEffect.ref}>
<rect id="Rectangle 1" x="418" y="249" width="10" height="21" fill="#6D77F7"/>
<ellipse id="Ellipse 1" cx="423" cy="231.5" rx="10" ry="10" fill="#416834"/>
</g>
<path id="background" d="M148.123 82.6427C144.263 87.4037 142.777 94.0978 141.115 100.391C127.732 151.108 94.7541 191.903 57.1977 221.041C41.2933 233.384 21.9305 249.937 25.41 272.067C27.2836 283.951 35.5034 292.7 41.6102 302.38C54.4225 322.648 58.5782 350.197 52.4714 374.461C45.5265 402.067 26.1143 427.827 32.1225 455.741C35.8274 472.924 48.4073 485.152 60.5011 495.662C79.3685 512.048 98.837 527.398 118.907 541.712C132.36 551.305 146.672 560.641 162.351 561.858C176.157 562.932 189.68 557.598 202.789 552.336C214.241 547.733 225.983 542.943 235.231 533.722C241.268 527.701 246.078 519.933 252.784 515.007C268.533 503.438 288.763 510.769 306.822 515.723C349.436 527.35 395.043 523.104 435.593 503.738C497.795 474.027 545.205 411.632 606.048 378.155C632.208 363.757 660.664 354.822 684.887 336.279C698.533 325.722 710.261 312.822 719.541 298.163C737.854 269.446 747.758 232.833 744.898 196.993C742.038 161.153 726.014 126.616 700.847 106.383C673.906 84.7261 639.878 80.681 609.224 67.6795C577.571 54.2485 549.41 31.1665 518.059 16.7546C492.691 5.12529 465.083 -0.583488 437.261 0.0470952C409.439 0.677679 382.109 7.63163 357.275 20.3987C323.156 37.9393 288.572 78.8625 250.572 81.9697C223.497 84.1175 169.268 56.5681 148.123 82.6427Z" fill="#544FAC" fillOpacity="0.27"/>
<g id="forwardtyre" ref={rotatingEffect2.ref}>
<path id="Vector" d="M479.964 513.61L475.555 443.519L475.463 443.368L471.012 444.944L450.522 505.663L417.945 482.18L469.849 443.941L469.899 443.791L470.195 443.684L473.54 441.214L419.136 410.206L405.802 425.098L407.915 439.059L470.462 440.19V441.622L406.732 440.462L404.337 424.632L422.573 404.264L449.846 371.925L450.332 373.263L456.107 366.82L477.618 370.736V369.87L479.027 369.913V370.994L510.977 376.807L481.161 437.412L476.816 440.612V440.97V441.371L545.709 416.972L537.531 482.273L479.069 444.421L477.013 443.247L511.484 499.727L479.964 513.61ZM477.147 446.068L481.267 511.49L509.477 499.047L477.147 446.068ZM420.396 482.18L449.832 503.393L469.089 446.304L420.396 482.18ZM478.379 442.33L479.851 443.168L536.447 479.824L544.054 419.062L478.379 442.33ZM473.378 437.176L475.146 440.075L475.456 439.846L477.569 372.168L456.622 368.345L450.874 374.788L473.378 437.176ZM420.277 409.218L472.991 439.288L472.075 437.763L449.832 375.998L423.629 405.266L420.277 409.218ZM478.999 372.426L476.886 438.786L480.07 436.438L508.885 377.86L478.999 372.426Z" fill="#535461"/>
<path id="Vector_2" d="M476.379 356.976C468.903 356.967 461.461 357.988 454.255 360.011C450.538 361.053 446.899 362.362 443.366 363.928C424.538 372.223 409.406 387.322 400.898 406.303C392.389 425.283 391.109 446.797 397.304 466.682C403.499 486.567 416.729 503.409 434.436 513.952C452.142 524.495 473.066 527.988 493.16 523.756C513.254 519.523 531.089 507.867 543.216 491.041C555.343 474.215 560.9 453.415 558.811 432.665C556.722 411.915 547.137 392.69 531.909 378.709C516.681 364.728 496.892 356.984 476.372 356.976H476.379ZM476.097 504.524C461.812 504.518 447.959 499.546 436.838 490.432C425.717 481.319 417.998 468.613 414.962 454.425C411.927 440.236 413.757 425.419 420.15 412.435C426.543 399.45 437.114 389.079 450.106 383.043C453.411 381.505 456.843 380.267 460.362 379.342C468.963 377.072 477.942 376.691 486.7 378.223C495.458 379.755 503.795 383.166 511.155 388.228C518.516 393.29 524.731 399.887 529.388 407.58C534.044 415.274 537.036 423.887 538.162 432.847C539.289 441.807 538.526 450.909 535.923 459.545C533.319 468.182 528.937 476.156 523.066 482.937C517.194 489.718 509.97 495.151 501.873 498.873C493.775 502.595 484.991 504.521 476.104 504.524H476.097Z" fill="#535461"/>
</g>
<g id="backtyre" ref={rotatingEffect.ref}>
<path id="Vector_3" d="M179.773 513.323L175.357 443.204L175.266 443.053L170.814 444.629L150.331 505.376L117.755 481.901L169.645 443.662L169.694 443.512L169.99 443.404L173.336 440.934L118.931 409.927L105.604 424.818L107.718 438.779L170.279 439.939V441.371L106.548 440.211L104.139 424.36L122.382 403.985L149.676 371.624L150.162 372.963L155.938 366.519L177.393 370.428V369.562L178.801 369.605V370.686L210.751 376.5L180.964 437.075L176.618 440.276V440.634V441.035L245.504 416.635L237.327 481.936L178.865 444.084L176.808 442.91L211.279 499.384L179.773 513.323ZM176.956 445.781L181.076 511.204L209.286 498.761L176.956 445.781ZM120.199 481.886L149.634 503.1L168.891 446.01L120.199 481.886ZM178.182 442.037L179.654 442.875L236.249 479.531L243.856 418.769L178.182 442.037ZM173.181 436.882L174.949 439.782L175.258 439.553L177.372 371.875L156.424 368.066L150.676 374.509L173.181 436.882ZM120.058 408.917L172.772 438.987L171.856 437.462L149.613 375.698L123.418 404.958L120.058 408.917ZM178.801 372.125L176.688 438.507L179.872 436.159L208.687 377.581L178.801 372.125Z" fill="#535461"/>
<path id="Vector_4" d="M257.035 422.37C254.21 409.612 248.491 397.702 240.334 387.589C237.306 383.831 233.967 380.344 230.353 377.165C216.459 364.972 198.975 357.813 180.645 356.812C162.315 355.811 144.176 361.024 129.076 371.634C113.977 382.244 102.77 397.65 97.2157 415.434C91.6612 433.218 92.0732 452.373 98.387 469.893C104.701 487.413 116.559 502.306 132.101 512.235C147.642 522.164 165.987 526.567 184.257 524.752C202.526 522.938 219.686 515.009 233.043 502.21C246.4 489.411 255.198 472.467 258.056 454.036C258.721 449.697 259.055 445.312 259.056 440.92C259.061 434.68 258.383 428.458 257.035 422.37ZM175.899 504.238C163.057 504.224 150.531 500.191 140.024 492.686C129.517 485.181 121.539 474.569 117.174 462.293C112.81 450.016 112.271 436.672 115.631 424.073C118.991 411.475 126.087 400.234 135.954 391.879C145.82 383.524 157.979 378.461 170.777 377.377C183.575 376.294 196.39 379.243 207.481 385.824C218.571 392.405 227.399 402.298 232.763 414.158C238.127 426.018 239.767 439.269 237.46 452.11C234.819 466.746 227.212 479.978 215.964 489.502C204.716 499.026 190.539 504.241 175.899 504.238Z" fill="#535461"/>
</g>
<g id="Static" ref={jumpingEffect.ref}>
<path id="Vector_5" d="M272.586 396.849L242.506 366.676L233.105 376.358L263.186 406.531L272.586 396.849Z" fill="#6C63FF"/>
<path id="Vector_6" d="M272.586 396.849L242.506 366.676L233.105 376.358L263.186 406.531L272.586 396.849Z" fill="#535461"/>
<path id="Vector_7" d="M249.681 352.236C249.681 352.236 267.142 342.872 273.89 336.843C277.952 333.231 282.319 329.99 286.942 327.157L308.847 313.604L354.63 310.024L356.744 317.9C356.744 317.9 360.265 329.355 325.047 339.378C289.829 349.401 272.22 365.152 272.22 365.152C272.22 365.152 249.681 372.999 249.681 352.236Z" fill="#DB8B8B"/>
<path id="Vector_8" opacity="0.1" d="M274.087 363.598C272.84 364.565 272.22 365.123 272.22 365.123C272.22 365.123 249.681 372.998 249.681 352.236C249.681 352.236 250.773 351.649 252.498 350.668C254.242 353.554 256.684 355.937 259.592 357.59C262.499 359.244 265.776 360.112 269.107 360.111H271.495L274.087 363.598Z" fill="black"/>
<path id="Vector_9" opacity="0.05" d="M356.081 321.852C354.123 326.068 347.368 332.999 325.047 339.349C296.443 347.489 279.454 359.396 274.087 363.598C272.84 364.565 272.22 365.123 272.22 365.123C272.22 365.123 249.681 372.998 249.681 352.236C249.681 352.236 250.773 351.649 252.498 350.668C257.732 347.754 268.811 341.361 273.869 336.815C277.93 333.201 282.297 329.96 286.92 327.128L308.826 313.575L316.982 312.938L354.609 309.996L356.722 317.871C356.722 317.871 357.215 319.41 356.081 321.852Z" fill="black"/>
<path id="Vector_10" d="M250.033 347.583L231.368 360.112L286.026 406.648C286.026 406.648 294.056 401.636 289.829 395.909C289.829 395.909 275.742 383.738 275.038 366.555L270.812 360.828H268.424C264.386 360.828 260.448 359.554 257.154 357.181C253.859 354.809 251.371 351.455 250.033 347.583V347.583Z" fill="#975579"/>
<path id="Vector_11" opacity="0.1" d="M356.081 321.852C344.812 316.317 317.299 315.723 317.299 315.723L317.004 312.938L354.63 309.996L356.744 317.871C356.744 317.871 357.215 319.41 356.081 321.852Z" fill="black"/>
<path id="Vector_12" d="M317.299 314.291C317.299 314.291 350.404 315.007 358.857 322.167L354.63 235.538H308.847L317.299 314.291Z" fill="#ABB1D1"/>
<path id="Vector_13" d="M317.299 313.933C317.299 313.933 350.404 314.649 358.857 321.809L354.63 235.18H308.847L317.299 313.933Z" fill="#CA4F54"/>
<path id="Vector_14" d="M343.896 261.283C343.896 261.283 426.764 258.419 428.454 269.309C430.145 280.198 345.586 275.609 345.586 275.609C345.586 275.609 338.825 268.729 343.896 261.283Z" fill="#535461"/>
<path id="Vector_15" opacity="0.05" d="M343.896 261.283C343.896 261.283 426.764 258.419 428.454 269.309C430.145 280.198 345.586 275.609 345.586 275.609C345.586 275.609 338.825 268.729 343.896 261.283Z" fill="black"/>
<path id="Vector_16" d="M276.813 304.834H262.155V434.333H276.813V304.834Z" fill="#53624E"/>
<path id="Vector_17" opacity="0.1" d="M276.813 304.827V314.8C271.939 315.444 266.952 315.852 262.155 316.01V304.827H276.813Z" fill="black"/>
<path id="Vector_18" d="M272.868 340.359L426.771 291.653L431.842 303.688L273.995 358.694L272.868 340.359Z" fill="#53624E"/>
<path id="Vector_19" d="M275.714 294.095C273.658 293.933 271.612 293.653 269.586 293.257C261.641 291.711 241.609 288.467 236.221 293.973C229.459 300.846 231.713 312.881 249.751 314.599C267.79 316.318 298.796 311.735 305.001 304.855C305.001 304.827 293.781 295.505 275.714 294.095Z" fill="#535461"/>
<path id="Vector_20" d="M318.532 417.144L429.588 305.979L435.787 315.143L329.802 427.453L318.532 417.144Z" fill="#53624E"/>
<path id="Vector_21" opacity="0.1" d="M460.355 379.342C456.836 380.267 453.404 381.505 450.099 383.043L443.366 363.92C446.899 362.355 450.538 361.046 454.255 360.004L460.355 379.342Z" fill="black"/>
<path id="Vector_22" d="M479.196 435.479L471.307 440.061L416.269 283.749L413.804 276.754L426.771 269.302L430.018 279.597L479.196 435.479Z" fill="#53624E"/>
<path id="Vector_23" opacity="0.1" d="M430.018 279.597L416.269 283.749L413.804 276.754L426.771 269.302L430.018 279.597Z" fill="black"/>
<path id="Vector_24" d="M346.15 291.653L423.383 264.719C423.383 264.719 436.914 266.438 431.835 277.9L354.046 301.39C354.046 301.39 342.213 302.536 346.15 291.653Z" fill="#535461"/>
<path id="Vector_25" opacity="0.1" d="M259.056 440.92C259.055 445.312 258.721 449.697 258.056 454.036C251.294 453.542 244.307 452.826 237.46 452.11C238.981 443.597 238.792 434.859 236.904 426.422C243.574 424.99 250.385 423.623 257.035 422.384C258.382 428.468 259.06 434.684 259.056 440.92V440.92Z" fill="black"/>
<path id="Vector_26" opacity="0.1" d="M276.813 419.098V434.326H262.155V421.439C267.227 420.544 272.157 419.75 276.813 419.098Z" fill="black"/>
<path id="Vector_27" d="M182.105 440.655C182.105 440.655 300.493 409.154 310.073 421.174C319.652 433.195 329.802 449.246 299.951 454.974C270.1 460.701 179.872 445.23 179.872 445.23L182.105 440.655Z" fill="#53624E"/>
<path id="Vector_28" opacity="0.1" d="M240.334 387.589L225.289 401.586C222.625 398.109 219.613 394.923 216.301 392.078L230.346 377.165C233.963 380.344 237.304 383.831 240.334 387.589V387.589Z" fill="black"/>
<path id="Vector_29" d="M178.16 434.333L266.663 340.359L269.488 362.131L182.668 442.925L178.16 434.333Z" fill="#53624E"/>
<path id="Vector_30" opacity="0.1" d="M177.033 449.805C182.017 449.805 186.056 445.699 186.056 440.634C186.056 435.568 182.017 431.462 177.033 431.462C172.05 431.462 168.011 435.568 168.011 440.634C168.011 445.699 172.05 449.805 177.033 449.805Z" fill="black"/>
<path id="Vector_31" d="M175.899 449.805C180.883 449.805 184.922 445.699 184.922 440.634C184.922 435.568 180.883 431.462 175.899 431.462C170.916 431.462 166.877 435.568 166.877 440.634C166.877 445.699 170.916 449.805 175.899 449.805Z" fill="#535461"/>
<path id="Vector_32" opacity="0.1" d="M475.534 448.946C480.517 448.946 484.556 444.84 484.556 439.774C484.556 434.709 480.517 430.603 475.534 430.603C470.55 430.603 466.511 434.709 466.511 439.774C466.511 444.84 470.55 448.946 475.534 448.946Z" fill="black"/>
<path id="Vector_33" d="M476.097 450.091C481.08 450.091 485.12 445.985 485.12 440.92C485.12 435.855 481.08 431.749 476.097 431.749C471.114 431.749 467.074 435.855 467.074 440.92C467.074 445.985 471.114 450.091 476.097 450.091Z" fill="#535461"/>
<path id="Vector_34" opacity="0.1" d="M315.708 449.805C325.67 449.805 333.746 441.596 333.746 431.47C333.746 421.343 325.67 413.134 315.708 413.134C305.745 413.134 297.669 421.343 297.669 431.47C297.669 441.596 305.745 449.805 315.708 449.805Z" fill="black"/>
<path id="Vector_35" d="M316.842 449.805C326.804 449.805 334.88 441.596 334.88 431.47C334.88 421.343 326.804 413.134 316.842 413.134C306.879 413.134 298.803 421.343 298.803 431.47C298.803 441.596 306.879 449.805 316.842 449.805Z" fill="#535461"/>
<path id="Vector_36" d="M312.025 430.092L312.02 430.096C309.901 431.707 309.468 434.758 311.052 436.911L325.369 456.37C326.953 458.524 329.955 458.964 332.073 457.354L332.079 457.349C334.197 455.739 334.631 452.688 333.046 450.535L318.729 431.075C317.145 428.922 314.144 428.482 312.025 430.092Z" fill="#6C63FF"/>
<path id="Vector_37" d="M398.301 176.83L396.624 198.387C396.431 201.118 396.467 203.86 396.73 206.585C396.948 208.998 396.73 213.222 394.406 219.665C391.421 227.896 389.879 236.595 389.848 245.368V269.903L373.648 267.039C373.648 267.039 374.352 232.674 371.535 226.946C368.718 221.219 373.648 170.387 373.648 170.387L398.301 176.83Z" fill="#DB8B8B"/>
<path id="Vector_38" opacity="0.05" d="M397.47 187.512L396.624 198.387C396.434 201.116 396.472 203.856 396.737 206.578C396.955 208.991 396.737 213.215 394.413 219.665C391.428 227.896 389.886 236.595 389.855 245.368V269.903L373.655 267.039C373.655 267.039 374.36 232.674 371.542 226.946C369.549 222.887 371.436 196.204 372.711 180.976C373.24 174.711 373.655 170.387 373.655 170.387L398.308 176.83L397.47 187.512Z" fill="black"/>
<path id="Vector_39" d="M318.018 341.497L311.925 376.721C311.157 381.424 309.978 386.049 308.403 390.539C304.832 400.462 307.114 414.373 308.847 421.962C309.615 425.312 310.256 427.432 310.256 427.432L291.943 437.455L286.308 433.159V430.295L285.603 366.577C281.377 356.553 282.786 341.519 285.603 335.791C286.404 333.909 286.968 331.932 287.28 329.906C288.688 322.231 289.125 311.449 289.125 311.449C289.125 311.449 300.395 292.119 313.778 305.006C318.708 309.752 320.582 315.959 320.976 321.902C321.666 332.075 318.018 341.497 318.018 341.497Z" fill="#DB8B8B"/>
<path id="Vector_40" opacity="0.1" d="M320.976 321.88C311.207 327.78 294.211 329.448 287.28 329.885C288.688 322.21 289.125 311.428 289.125 311.428C289.125 311.428 300.395 292.097 313.778 304.984C318.708 309.731 320.582 315.938 320.976 321.88Z" fill="black"/>
<path id="Vector_41" d="M344.769 304.268C337.279 308.322 330.201 313.119 323.639 318.587C312.369 327.894 284.195 328.61 284.195 328.61V317.871C284.899 304.984 272.925 290.665 256.725 250.572C246.378 224.97 249.244 210.48 252.668 203.32C254.612 199.275 256.725 197.593 256.725 197.593L344.769 214.775L347.918 224.369L354.63 244.845C354.63 244.845 329.978 246.277 325.752 248.425C321.526 250.572 324.343 269.903 324.343 269.903C320.117 289.949 344.769 304.268 344.769 304.268Z" fill="#CA4F54"/>
<path id="Vector_42" opacity="0.1" d="M398.301 176.83L397.469 187.512C385.214 191.092 376.466 179.694 376.466 179.694C375.187 180.043 373.931 180.471 372.704 180.976C373.233 174.711 373.648 170.387 373.648 170.387L398.301 176.83Z" fill="black"/>
<path id="Vector_43" opacity="0.1" d="M347.918 224.369C347.587 227.712 347.587 229.81 347.587 229.81C347.587 229.81 331.387 243.413 303.917 222.651C276.447 201.888 251.794 207.616 251.794 207.616C251.794 207.616 252.083 205.955 252.667 203.32C254.611 199.275 256.725 197.593 256.725 197.593L344.769 214.775L347.918 224.369Z" fill="black"/>
<path id="Vector_44" d="M407.795 148.873C405.957 163.442 405.344 181.806 405.344 181.806C389.144 194.693 376.466 178.227 376.466 178.227C361.167 182.4 353.975 196.011 350.587 207.888C348.773 214.313 347.765 220.945 347.587 227.627C347.587 227.627 343.304 231.206 335.416 231.922C327.956 232.559 317.264 230.583 303.917 220.467C276.447 199.705 251.794 205.432 251.794 205.432C251.794 205.432 256.725 176.795 267.994 168.203C279.264 159.612 287.716 148.873 301.804 115.94C315.891 83.0063 344.769 90.8817 344.769 90.8817C344.769 90.8817 346.178 84.4382 372.239 90.8817C378.587 92.5727 384.463 95.7364 389.405 100.124C403.344 112.038 410.106 130.516 407.795 148.873Z" fill="#975579"/>
<path id="Vector_45" d="M381.657 107.026C381.621 107.978 381.544 109.038 381.417 110.219C380.008 123.106 378.6 121.674 363.104 124.538C353.468 126.321 348.46 118.138 346.051 111.694C345.18 109.36 344.522 106.949 344.086 104.492L377.895 98.7642C377.895 98.7642 381.945 97.6115 381.657 107.026Z" fill="#DB8B8B"/>
<path id="Vector_46" opacity="0.05" d="M350.587 207.924C348.773 214.348 347.765 220.981 347.587 227.662C347.587 227.662 343.304 231.242 335.416 231.958C335.193 231.502 335.023 231.022 334.908 230.526C333.5 224.083 322.934 212.628 322.934 212.628C315.891 206.184 314.482 194.729 314.482 194.729L302.86 160.006L298.986 156.784C298.986 156.784 315.186 143.897 329.274 154.636C343.361 165.375 339.135 188.286 339.135 188.286L341.952 196.161C344.875 198.667 347.847 203.084 350.587 207.924Z" fill="black"/>
<path id="Vector_47" d="M301.099 156.068L316.595 194.013C316.595 194.013 318.004 205.468 325.047 211.912C325.047 211.912 335.613 223.367 337.021 229.81C338.43 236.254 358.152 253.436 358.152 253.436C358.152 253.436 376.466 270.619 377.874 277.062C377.874 277.062 394.779 282.074 392.666 292.097C392.666 292.097 405.344 279.21 392.666 267.039C379.987 254.868 363.083 229.81 363.083 229.81C363.083 229.81 353.222 203.32 344.065 195.445L341.248 187.57C341.248 187.57 345.474 164.659 331.387 153.92C317.299 143.181 301.099 156.068 301.099 156.068Z" fill="#DB8B8B"/>
<path id="Vector_48" opacity="0.1" d="M310.256 427.41L291.943 437.433L286.308 433.138V430.274C292.636 429.817 298.784 427.931 304.304 424.754C305.995 423.78 307.586 422.821 308.861 421.976C309.601 425.291 310.256 427.41 310.256 427.41Z" fill="black"/>
<path id="Vector_49" opacity="0.1" d="M331.387 125.999L341.248 165.375C341.248 165.375 310.96 170.387 304.621 165.375C298.282 160.364 286.308 158.932 286.308 158.932C286.308 158.932 298.986 121.703 306.03 117.407C313.073 113.112 331.387 125.999 331.387 125.999Z" fill="black"/>
<path id="Vector_50" d="M331.387 124.567L341.248 163.944C341.248 163.944 310.96 168.955 304.621 163.944C298.282 158.932 286.308 157.5 286.308 157.5C286.308 157.5 298.986 120.271 306.03 115.975C313.073 111.68 331.387 124.567 331.387 124.567Z" fill="#975579"/>
<path id="Vector_51" opacity="0.1" d="M381.657 106.31C379.684 109.078 377.175 111.407 374.284 113.152C371.393 114.898 368.181 116.024 364.846 116.462C361.511 116.899 358.123 116.638 354.891 115.695C351.659 114.752 348.651 113.147 346.051 110.978C345.18 108.644 344.522 106.233 344.086 103.776L377.895 98.0483C377.895 98.0483 381.945 96.8956 381.657 106.31Z" fill="black"/>
<path id="Vector_52" d="M386.327 90.9175C386.327 97.5632 383.729 103.937 379.106 108.636C374.483 113.335 368.212 115.975 361.674 115.975C355.136 115.975 348.865 113.335 344.242 108.636C339.619 103.937 337.022 97.5632 337.022 90.9175C337.022 90.5022 337.022 90.087 337.022 89.6717C337.184 83.0259 339.937 76.718 344.675 72.1355C349.414 67.553 355.749 65.0714 362.287 65.2366C368.825 65.4018 375.031 68.2003 379.539 73.0164C384.048 77.8325 386.489 84.2717 386.327 90.9175V90.9175Z" fill="#DB8B8B"/>
<path id="Vector_53" opacity="0.1" d="M386.327 90.9175C386.329 93.2269 386.016 95.5255 385.397 97.7475C383.491 98.1697 381.504 97.9847 379.706 97.2178C377.071 96.1653 374.81 94.354 372.282 93.051C365.161 89.3853 356.687 90.1084 348.798 91.3184C344.882 91.9198 340.438 92.4782 337.36 89.9438C337.254 89.8589 337.153 89.7681 337.057 89.6717C337.219 83.0259 339.972 76.718 344.711 72.1355C349.449 67.553 355.784 65.0714 362.322 65.2366C368.86 65.4018 375.066 68.2003 379.575 73.0164C384.083 77.8325 386.524 84.2717 386.362 90.9175H386.327Z" fill="black"/>
<path id="Vector_54" opacity="0.05" d="M271.164 167.881C271.164 167.881 289.477 172.893 295.112 185.78C300.747 198.667 315.989 201.022 315.989 201.022" fill="black"/>
<path id="Vector_55" d="M340.191 451.394H297.93V464.997H340.191V451.394Z" fill="#6C63FF"/>
<path id="Vector_56" d="M340.191 451.394H297.93V464.997H340.191V451.394Z" fill="#535461"/>
<path id="Vector_57" d="M304.276 426.15C308.058 424.002 311.376 421.854 311.665 420.967C311.665 420.967 321.209 431.205 329.71 434.383C332.569 435.457 335.306 436.839 337.874 438.507C341.241 440.655 346.044 443.182 350.404 443.182C350.404 443.182 360.265 451.774 341.248 453.206C322.23 454.637 277.855 449.626 277.855 449.626L280.673 431.727C288.905 432.218 297.101 430.281 304.276 426.15Z" fill="#975579"/>
<path id="hat" d="M319.187 75.4173C320.687 80.1998 327.893 80.3501 331.591 83.8726C333.514 85.7054 334.408 88.4116 336.521 90.044C339.459 92.3207 343.699 91.8195 347.439 91.2754C354.969 90.1872 363.055 89.5357 369.845 92.8362C372.253 94.0031 374.416 95.6355 376.93 96.5877C379.445 97.5399 382.565 97.6545 384.608 95.9648C386.242 94.6117 386.841 92.3851 388.32 90.896C389.468 89.7218 391.067 89.0631 392.377 88.0322C395.251 85.8271 396.49 82.2331 397.307 78.7965C398.998 71.723 399.484 64.0982 396.603 57.3899C393.722 50.6815 386.791 45.2189 379.227 45.5697C376.909 45.6771 374.648 46.2856 372.338 46.5434C366.316 47.1662 360.364 45.1115 354.321 44.7607C352.568 44.5438 350.789 44.7904 349.158 45.4766C347.927 46.1717 346.866 47.138 346.051 48.3046C343.285 51.9884 341.39 56.2708 340.515 60.8192C339.811 64.2486 339.776 67.3558 335.641 67.8856C330.943 68.5156 316.01 65.301 319.187 75.4173Z" fill="#53624E"/>

</g>
</g>
<defs>
<clipPath id="clip0">
<rect width="745" height="562" fill="white"/>
</clipPath>
</defs>
</svg>



        </div>
    )
}