if ( typeof(Dataface) == 'undefined' ) Dataface = {};
if ( typeof(Dataface.RelationshipTool) == 'undefined' ) Dataface.RelationshipTool = {};
function submitForm(url, vals, method){
	if ( !method ) method='post';
	var form;
	form = document.createElement('FORM');
	form.setAttribute('method',method);
	form.setAttribute('action', url);
	for (i in vals){
		var input = document.createElement('INPUT');
		input.setAttribute('type','hidden');
		input.setAttribute('name',i);
		input.setAttribute('value',vals[i]);
		form.appendChild(input);
	}
	document.body.appendChild(form);
	form.submit();
}


Dataface.RelationshipTool.move = function( recordID, relationship, index, direction, ajax ){
	if ( !direction ) direction = 'up';
	if ( ajax == null ) ajax = false;
	var vals = {
		'--selected-ids': recordID,
		'-relationship': relationship,
		'-reorder:direction': direction,
		'-action': 'reorder_related_records',
		'-reorder:index': index,
		'-redirect': window.location.href
	};
	
	if ( ajax ){
		postDataReturnText(DATAFACE_SITE_HREF, vals, function(text){});
	} else {
		submitForm(DATAFACE_SITE_HREF, vals);
	}
};

Dataface.RelationshipTool.moveUp = function( recordID, relationship, index, ajax){
	return this.move(recordID, relationship, index, 'up', ajax);
};

Dataface.RelationshipTool.moveDown = function( recordID, relationship, index, ajax){
	return this.move(recordID, relationship, index, 'down', ajax);
};
