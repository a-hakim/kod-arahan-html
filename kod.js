function menu_pautan($id) {
	var urlmenu = document.getElementById($id);
	urlmenu.onchange = function() {
		window.open( this.options[ this.selectedIndex ].value );
	};
}
