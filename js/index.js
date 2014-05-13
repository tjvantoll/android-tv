document.addEventListener( "deviceready", function() {

});

new kendo.mobile.Application( document.body, {
	skin: "flat"
});

$( ".box" ).on( "click", function() {
	var drawer = $( "#drawer" ).data( "kendoMobileDrawer" );
	drawer.show();
});