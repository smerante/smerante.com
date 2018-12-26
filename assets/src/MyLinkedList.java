
// O(1) add or O(n) with no tail pointer
// O(n) remove
public class MyLinkedList <E>{
	class Node
	{
		E data;
		Node next;
		public Node(E e)
		{
			this.data = e;
			next = null;
		}
	}
	Node head;
	Node tail;
	public MyLinkedList()
	{
		head = null;
		tail = null;
	}
	public void add(E e)
	{
		if(head == null){
			head = new Node(e);
			tail = head;
		}
		else
		{
			tail.next = new Node(e);
			tail = tail.next;
		}
		
	}
	public E get(int i )
	{
		Node n = head;
		for(int j = 0; j <i; j++)
			n = n.next;
		
		return n.data;
	}
}
