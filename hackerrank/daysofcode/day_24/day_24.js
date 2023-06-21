process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function Node(data){
    this.data=data;
    this.next=null;
}
function Solution(){
	// Map use is pointless - the list is ordered.
    this.removeDuplicates_Map_Solution=function(head){
	  if (!head || !head.next) {
		  return head;
	  }
	  
	  let map = {};
      let last = head;
      let current = head.next;
      
      map[last.data] = true;
      
      while (current !== null) {
		  if (last === current) {
			  continue;
		  }
		  
		  if (map[current.data] !== undefined) {
			  last.next = null;
			  current = current.next;
			  continue;
		  }
		  else {
			  map[current.data] = true;
			  
			  // Modify the list.
			  last.next = current;
			  // Advance the loop pointers.
			  last = current;
			  current = last.next;
		  }
	  }
	  
	  return head;
    }

    this.removeDuplicates=function(head){
	  if (!head || !head.next) {
		  return head;
	  }
	  
      let last = head;
      let current = head.next;
      
      while (current !== null) {
		  if (last === current) {
			  continue;
		  }
		  
		  if (last.data === current.data) {
			  last.next = null;
			  current = current.next;
			  continue;
		  }
		  else {
			  // Modify the list.
			  last.next = current;
			  // Advance the loop pointers.
			  last = current;
			  current = last.next;
		  }
	  }
	  
	  return head;
    }

	this.insert=function(head,data){
        var p=new Node(data);
        if(head==null){
            head=p;
        }
        else if(head.next==null){
            head.next=p;
        }
        else{
            var start=head;
            while(start.next!=null){
                start=start.next;
            }
            start.next=p;
        }
        return head;
        
    };

	this.display=function(head){
        var start=head;
            while(start){
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}
function main(){
    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T;i++){
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    head=mylist.removeDuplicates(head);
    mylist.display(head);
}
	