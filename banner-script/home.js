
//map zoom effect
var mapContainer =document.querySelector('.world-map-div')
var widthScreen = mapContainer.clientWidth,
	 heightScreen = mapContainer.clientHeight;
// usa coords
var translateXusa =  (widthScreen * 21.9867)/100 + 'px', //14 - coefficient
	 translateYusa = (heightScreen * -3.6)/100 + 'px'; //20 - coefficient

var translateInusa = 'scale(4) ' + 'translate'+ '(' + translateXusa + ',' + translateYusa + ')',
	 translateOutusa = 'scale(1) ' + 'translate(0)';
// kenya coords
var translateXkenya = '-' + (widthScreen * 7.7292)/100 + 'px', //14 - coefficient
	 translateYkenya = (heightScreen * -21)/100 + 'px'; //20 - coefficient

var translateInkenya = 'scale(14) ' + 'translate'+ '(' + translateXkenya + ',' + translateYkenya + ')',
	 translateOutkenya = 'scale(1) ' + 'translate(0)';
// uganda coords
// var translateXuganda = '-' + (widthScreen * 7.929)/100 + 'px', //14 - coefficient
// 	 translateYuganda = (heightScreen * -20.8)/100 + 'px'; //20 - coefficient

// var translateInuganda = 'scale(10) ' + 'translate'+ '(' + translateXuganda + ',' + translateYuganda + ')',
// 	 translateOutuganda = 'scale(1) ' + 'translate(0)';
// india coords
var translateX = '-' + (widthScreen * 17.69)/100 + 'px', //14 - coefficient
	 translateY = (heightScreen * -11.2)/100 + 'px'; //20 - coefficient

var translateIn = 'scale(6) ' + 'translate'+ '(' + translateX + ', ' + translateY + ')',
	 translateOut = 'scale(1) ' + 'translate(0)';



//Elements

var map = document.querySelector('svg'),
	 locationButtonIN = document.querySelector('#IN'),
	 locationButtonUS = document.querySelector('#US'),
	 locationButtonUG = document.querySelector('#UG'),
	 locationButtonKE = document.querySelector('#KE'),
	 body = document.querySelector('body');
var n1 = document.getElementById('ele1');
var n2 = document.getElementById('ele2');
var n3 = document.getElementById('ele3');
var n4 = document.getElementById('ele4');
var n5 = document.getElementById('ele5');
var n6 = document.getElementById('ele6');
var n7 = document.getElementById('ele7');
var n8 = document.getElementById('ele8');
var n9 = document.getElementById('ele9');
var n10 = document.getElementById('ele10');
var n11 = document.getElementById('ele11');
var n12 = document.getElementById('ele12');
var n13 = document.getElementById('ele13');
var timerDots = 3000;
var bannerTex1 = document.getElementById('banner-heading'),
bannerTex2 = document.getElementById('banner-heading2'),
bannerTex3 = document.getElementById('banner-heading3');
 //2 3 6 9 10 12 -- kenya and uganda
 //1 4 5 7 11 8 -- india
 // 13 usa
//Location click event india
locationButtonIN.addEventListener('mouseover',()=>{
    document.getElementById('INtip').style.visibility = "visible"
})
locationButtonIN.addEventListener('mouseout',()=>{
    document.getElementById('INtip').style.visibility = "hidden"
})
locationButtonUS.addEventListener('mouseover',()=>{
    document.getElementById('UStip').style.visibility = "visible"
})
locationButtonUS.addEventListener('mouseout',()=>{
    document.getElementById('UStip').style.visibility = "hidden"
})
locationButtonUG.addEventListener('mouseover',()=>{
    document.getElementById('UGtip').style.visibility = "visible"
})
locationButtonUG.addEventListener('mouseout',()=>{
    document.getElementById('UGtip').style.visibility = "hidden"
})
locationButtonKE.addEventListener('mouseover',()=>{
    document.getElementById('KEtip').style.visibility = "visible"
})
locationButtonKE.addEventListener('mouseout',()=>{
    document.getElementById('KEtip').style.visibility = "hidden"
})



locationButtonIN.addEventListener('click', function() {
	
	var mapIncreased = map.classList.contains('mapIn');

	if (mapIncreased) { //Out
        map.classList.toggle('mapIn');
        map.classList.add('mapOut');
        map.style.transform = translateOut;
        // n1.style.display='none'
        // n4.style.display="none"
        // n5.style.display="none"
        // n7.style.display="none"
        // n8.style.display="none"
        // n11.style.display="none"
        n1.style.display='none'
        n2.style.display='none'
        n3.style.display='none'
        n4.style.display="none"
        n5.style.display="none"
        n6.style.display="none"
        n7.style.display="none"
        n8.style.display="none"
        n9.style.display="none"
        n10.style.display="none"
        n11.style.display="none"
        n12.style.display="none"
        n13.style.display="none"
        document.querySelector('.close').style.display="none"  
        
        locationButtonIN.addEventListener('mouseover',()=>{
            document.getElementById('INtip').style.visibility = "visible"
        })
        locationButtonIN.addEventListener('mouseout',()=>{
            document.getElementById('INtip').style.visibility = "hidden"
        })
        bannerTex1.style.display = 'block'
        bannerTex2.style.display = 'block'
bannerTex3.style.display = 'block'
    
    } else { //In
        bannerTex1.style.display = 'none'
        bannerTex2.style.display = 'none'
bannerTex3.style.display = 'none'
        map.classList.add('mapIn');
        map.classList.remove('mapOut');
        map.style.transform = translateIn;
        document.getElementById('INtip').style.visibility = "hidden"
        setTimeout(() => {
            n1.style.display='block'
            n4.style.display="block"
            n5.style.display="block"
            n7.style.display="block"
            n8.style.display="block"
            n11.style.display="block"
            document.querySelector('.close1').style.display="block"  
        }, timerDots);
        

        locationButtonIN.addEventListener('mouseover',()=>{
            document.getElementById('INtip').style.visibility = "hidden"
        })
        locationButtonIN.addEventListener('mouseout',()=>{
            document.getElementById('INtip').style.visibility = "hidden"
        })
        
    }
		
});

//Location click event usa

locationButtonUS.addEventListener('click', function() {
	
	var mapIncreased = map.classList.contains('mapIn');

	if (mapIncreased) { //Out
        map.classList.toggle('mapIn');
        map.classList.add('mapOut');
        map.style.transform = translateOutusa;
        // n13.style.display="none"
        n1.style.display='none'
        n2.style.display='none'
        n3.style.display='none'
        n4.style.display="none"
        n5.style.display="none"
        n6.style.display="none"
        n7.style.display="none"
        n8.style.display="none"
        n9.style.display="none"
        n10.style.display="none"
        n11.style.display="none"
        n12.style.display="none"
        n13.style.display="none"
        locationButtonUS.addEventListener('mouseover',()=>{
            document.getElementById('UStip').style.visibility = "visible"
        })
        locationButtonUS.addEventListener('mouseout',()=>{
            document.getElementById('UStip').style.visibility = "hidden"
        })
        document.querySelector('.close2').style.display="none"
        bannerTex1.style.display = 'block'
        bannerTex2.style.display = 'block'
bannerTex3.style.display = 'block'
    } else { //In
        bannerTex1.style.display = 'none'
        bannerTex2.style.display = 'none'
bannerTex3.style.display = 'none'
        map.classList.add('mapIn');
        map.classList.remove('mapOut');
        map.style.transform = translateInusa;
         document.getElementById('UStip').style.visibility = "hidden"
        setTimeout(() => {
        n13.style.display="block"
        document.querySelector('.close2').style.display="block" 
        },timerDots);
        locationButtonUS.addEventListener('mouseover',()=>{
            document.getElementById('UStip').style.visibility = "hidden"
        })
        locationButtonUS.addEventListener('mouseout',()=>{
            document.getElementById('UStip').style.visibility = "hidden"
        })
    }
		
});

//Location click event Kenya

locationButtonKE.addEventListener('click', function() {
	
	var mapIncreased = map.classList.contains('mapIn');

	if (mapIncreased) { //Out
        map.classList.toggle('mapIn');
        map.classList.add('mapOut');
        map.style.transform = translateOutkenya;
//         document.getElementById('KEtip').style.visibility = "hidden"
// document.getElementById('UGtip').style.visibility = "hidden"
locationButtonKE.addEventListener('mouseover',()=>{
    document.getElementById('KEtip').style.visibility = "visible"
})
locationButtonKE.addEventListener('mouseout',()=>{
    document.getElementById('KEtip').style.visibility = "hidden"
})
locationButtonUG.addEventListener('mouseover',()=>{
    document.getElementById('UGtip').style.visibility = "visible"
})
locationButtonUG.addEventListener('mouseout',()=>{
    document.getElementById('UGtip').style.visibility = "hidden"
})
document.querySelector('.close3').style.display="none" 
        // n2.style.display='none'
        // n3.style.display="none"
        // n6.style.display="none"
        // n9.style.display="none"
        // n10.style.display="none"
        // n12.style.display="none"
        n1.style.display='none'
        n2.style.display='none'
        n3.style.display='none'
        n4.style.display="none"
        n5.style.display="none"
        n6.style.display="none"
        n7.style.display="none"
        n8.style.display="none"
        n9.style.display="none"
        n10.style.display="none"
        n11.style.display="none"
        n12.style.display="none"
        n13.style.display="none"
        
        bannerTex1.style.display = 'block'
        bannerTex2.style.display = 'block'
bannerTex3.style.display = 'block'
    } else { //In
        bannerTex1.style.display = 'none'
        bannerTex2.style.display = 'none'
bannerTex3.style.display = 'none'
        map.classList.add('mapIn');
        map.classList.remove('mapOut');
        map.style.transform = translateInkenya;
        document.getElementById('KEtip').style.visibility = "hidden"
document.getElementById('UGtip').style.visibility = "hidden"

        setTimeout(() => {
        n2.style.display='block'
        n3.style.display="block"
        n6.style.display="block"
        n9.style.display="block"
        n10.style.display="block"
        n12.style.display="block"
        document.querySelector('.close3').style.display="block" 
        },timerDots);
      locationButtonKE.addEventListener('mouseover',()=>{
    document.getElementById('KEtip').style.visibility = "hidden"
})
locationButtonKE.addEventListener('mouseout',()=>{
    document.getElementById('KEtip').style.visibility = "hidden"
})
locationButtonUG.addEventListener('mouseover',()=>{
    document.getElementById('UGtip').style.visibility = "hidden"
})
locationButtonUG.addEventListener('mouseout',()=>{
    document.getElementById('UGtip').style.visibility = "hidden"
})

    }
    
		
});
//Location click event uganda


locationButtonUG.addEventListener('click', function() {
	
	var mapIncreased = map.classList.contains('mapIn');

	if (mapIncreased) { //Out
        map.classList.toggle('mapIn');
        map.classList.add('mapOut');
        map.style.transform = translateOutkenya;
//         document.getElementById('KEtip').style.visibility = "hidden"
// document.getElementById('UGtip').style.visibility = "hidden"
locationButtonKE.addEventListener('mouseover',()=>{
    document.getElementById('KEtip').style.visibility = "visible"
})
locationButtonKE.addEventListener('mouseout',()=>{
    document.getElementById('KEtip').style.visibility = "hidden"
})
locationButtonUG.addEventListener('mouseover',()=>{
    document.getElementById('UGtip').style.visibility = "visible"
})
locationButtonUG.addEventListener('mouseout',()=>{
    document.getElementById('UGtip').style.visibility = "hidden"
})
document.querySelector('.close3').style.display="none"
        // n2.style.display='none'
        // n3.style.display="none"
        // n6.style.display="none"
        // n9.style.display="none"
        // n10.style.display="none"
        // n12.style.display="none"
        n1.style.display='none'
        n2.style.display='none'
        n3.style.display='none'
        n4.style.display="none"
        n5.style.display="none"
        n6.style.display="none"
        n7.style.display="none"
        n8.style.display="none"
        n9.style.display="none"
        n10.style.display="none"
        n11.style.display="none"
        n12.style.display="none"
        n13.style.display="none"
        bannerTex1.style.display = 'block'
        bannerTex2.style.display = 'block'
bannerTex3.style.display = 'block'
    
    } else { //In
        bannerTex1.style.display = 'none'
        bannerTex2.style.display = 'none'
bannerTex3.style.display = 'none'
        map.classList.add('mapIn');
        map.classList.remove('mapOut');
        map.style.transform = translateInkenya;
        setTimeout(() => {
        n2.style.display='block'
        n3.style.display="block"
        n6.style.display="block"
        n9.style.display="block"
        n10.style.display="block"
        n12.style.display="block"
        document.querySelector('.close3').style.display="block" 
        },timerDots);
        locationButtonKE.addEventListener('mouseover',()=>{
            document.getElementById('KEtip').style.visibility = "hidden"
        })
        locationButtonKE.addEventListener('mouseout',()=>{
            document.getElementById('KEtip').style.visibility = "hidden"
        })
      locationButtonUG.addEventListener('mouseover',()=>{
    document.getElementById('UGtip').style.visibility = "hidden"
})
locationButtonUG.addEventListener('mouseout',()=>{
    document.getElementById('UGtip').style.visibility = "hidden"
})
    }
		
});

function zoomOutCloseIN() {
     bannerTex1.style.display = 'block'
        bannerTex2.style.display = 'block'
bannerTex3.style.display = 'block'
    map.classList.toggle('mapIn');
        map.classList.add('mapOut');
        map.style.transform = translateOut;
        n1.style.display='none'
        n2.style.display='none'
        n3.style.display='none'
        n4.style.display="none"
        n5.style.display="none"
        n6.style.display="none"
        n7.style.display="none"
        n8.style.display="none"
        n9.style.display="none"
        n10.style.display="none"
        n11.style.display="none"
        n12.style.display="none"
        n13.style.display="none"
        document.querySelector('.close1').style.display="none"  
        locationButtonIN.addEventListener('mouseover',()=>{
            document.getElementById('INtip').style.visibility = "visible"
        })
        locationButtonIN.addEventListener('mouseout',()=>{
            document.getElementById('INtip').style.visibility = "hidden"
        })
}
function zoomOutCloseUS(){
     bannerTex1.style.display = 'block'
        bannerTex2.style.display = 'block'
bannerTex3.style.display = 'block'
    map.classList.toggle('mapIn');
        map.classList.add('mapOut');
        map.style.transform = translateOutusa;
        // n13.style.display="none"
        n1.style.display='none'
        n2.style.display='none'
        n3.style.display='none'
        n4.style.display="none"
        n5.style.display="none"
        n6.style.display="none"
        n7.style.display="none"
        n8.style.display="none"
        n9.style.display="none"
        n10.style.display="none"
        n11.style.display="none"
        n12.style.display="none"
        n13.style.display="none"
        document.querySelector('.close2').style.display="none"  
        locationButtonUS.addEventListener('mouseover',()=>{
            document.getElementById('UStip').style.visibility = "visible"
        })
        locationButtonUS.addEventListener('mouseout',()=>{
            document.getElementById('UStip').style.visibility = "hidden"
        })
}
function zoomOutCloseUG(){
     bannerTex1.style.display = 'block'
        bannerTex2.style.display = 'block'
bannerTex3.style.display = 'block'
    map.classList.toggle('mapIn');
    map.classList.add('mapOut');
    map.style.transform = translateOutkenya;
    locationButtonKE.addEventListener('mouseover',()=>{
        document.getElementById('KEtip').style.visibility = "visible"
    })
    locationButtonKE.addEventListener('mouseout',()=>{
        document.getElementById('KEtip').style.visibility = "hidden"
    })
    locationButtonUG.addEventListener('mouseover',()=>{
        document.getElementById('UGtip').style.visibility = "visible"
    })
    locationButtonUG.addEventListener('mouseout',()=>{
        document.getElementById('UGtip').style.visibility = "hidden"
    })
    // n2.style.display='none'
    // n3.style.display="none"
    // n6.style.display="none"
    // n9.style.display="none"
    // n10.style.display="none"
    // n12.style.display="none"
    n1.style.display='none'
    n2.style.display='none'
    n3.style.display='none'
    n4.style.display="none"
    n5.style.display="none"
    n6.style.display="none"
    n7.style.display="none"
    n8.style.display="none"
    n9.style.display="none"
    n10.style.display="none"
    n11.style.display="none"
    n12.style.display="none"
    n13.style.display="none"
    document.querySelector('.close3').style.display="none"  

}