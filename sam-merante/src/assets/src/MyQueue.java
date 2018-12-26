
//With circular fixed size Q: O(1) add remove
//With adjustable size Q: O(n) - add (1) - remove

public class MyQueue<E>{
//FIFO
	private Object queueArray[];
	private int sizeOfQueue;
	private int elements;
	private int startOfQ;
	
	public MyQueue(int size)
	{
		queueArray = new Object[size];
		sizeOfQueue = size;
		elements = 0;
		startOfQ = 0;
	}
	public MyQueue()
	{
		queueArray = new Object[10];
		sizeOfQueue = 10;
		elements = 0;
	}
	
	public boolean enQueue(E e)
	{
		if(elements <= (sizeOfQueue - 1))
		{
			queueArray[(startOfQ + elements)%sizeOfQueue] = e;
			elements++;
			return true;
		}
		return false;
	}
	public E deQueue()
	{
		if(elements > 0)
		{
		E e = (E)queueArray[startOfQ%sizeOfQueue];
		startOfQ++;
		elements--;
		return e;
		}
		return null;
		
		
	}
}
