
// Can be implemented with a sorted or unsorted list
//sorted list takes O(n) insert O(1) to remove min or max
//unsorted list takes O(1) time to insert O(n) to remove min or max


//implemented with use of a heap, start heep at 1 to ensure leftchild = 2i and right = 2i+1
public class MyPQ<K extends Comparable<K>,V > {
	
	class Entry<K extends Comparable<K>>{
		K key;
		V value;
		Entry(K k, V v)
		{
			key = k;
			value = v;
		}
	}
	private Object[] array;
	private int size,start = 1,nodes;
	
	public MyPQ()
	{
		size = 11;
		array = new Object[size];
		nodes = 0;
	}
	
	public MyPQ(int s)
	{
		size = 11;
		array = new Object[size];
		nodes = 0;
	}
	
	public void insert(K k, V v)
	{
		if(nodes == 0){
			array[(nodes + start)] = new Entry(k,v);
			//System.out.println("Inserting "+ v);
		}
		else
		{
			array[(nodes + start)] = new Entry(k,v);
			//System.out.println("Inserting might upheap "+ v);
			upHeap((nodes + start));
		}
		
		nodes++;
			
	}
	public V removeMin()
	{
		if(nodes == 0)
			return null;
		else
		{
			V value = (V)((Entry)(array[start])).value;
			nodes--; // to actually get to swap the last element
			swap(start, (nodes+start));
			array[(nodes+start)] = null;
			//System.out.println("DownHeaping");
			downHeap(start);
			return value;
		}
			
	}
	
	private void downHeap(int i){
		Entry current = (Entry)array[i];
		if((i*2 + 1) <= nodes) // has right and left child
		{
			//System.out.println("DownHeaping w 2 children");
			Entry leftChild = (Entry)array[i*2];
			Entry rightChild = (Entry)array[i*2+1];
			if(leftChild.key.compareTo(rightChild.key) < 0 )
			{
				if(leftChild.key.compareTo(current.key) < 0)
				{
					swap(i,i*2);
					downHeap(i*2);
				}
			}else
			{
				if(rightChild.key.compareTo(current.key) < 0)
				{
					swap(i,(i*2+1));
					downHeap((i*2+1));
				}
			}
		}
		else if((i*2) <= nodes) // has left child
		{
			//System.out.println("DownHeaping w 1 left child");
			Entry leftChild = (Entry)array[i*2];
			if(leftChild.key.compareTo(current.key) < 0 )
			{
				swap(i,i*2);
				downHeap(i*2);
			}
		}else
		{

			//System.out.println("done");
		}
	}
	//re orders heap after isnert
	private void upHeap(int i)
	{
		
		Entry current = (Entry)array[i];
		Entry parent = (Entry)array[i/2];
		if(current.key.compareTo(parent.key) < 0) // needs to move up
		{
			swap(i, i/2);
			//	System.out.println("Up Heaping ");
			if(i/2 != 1)
				upHeap(i/2);
		}
	}
	
	private void swap(int i, int j)
	{
		Object o = array[i];
		array[i] = array[j];
		array[j] = o;
	}
	
	
}
