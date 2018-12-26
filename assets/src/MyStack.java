
// With fixed size Stack: O(1) - push and pop
// With adjustable Stack: O(n) - push, O(1) pop
public class MyStack<E>{
	private Object stackArray[];
	private int sizeOfStack;
	private int elements;
	public MyStack(int size)
	{
		stackArray = new Object[size];
		sizeOfStack = size;
		elements = 0;
	}
	public MyStack()
	{
		stackArray = new Object[10];
		sizeOfStack = 10;
		elements = 0;
	}
	public void push(E e)
	{
		if(elements <= (sizeOfStack - 1))
		{
			stackArray[elements] = e;
			elements++;
		}
	}
	public E pop()
	{
		if(elements > 0)
		{
			E e = (E)stackArray[elements-1];
			stackArray[elements-1] = null;
			elements--;
			return e;
		}
		return null;
	}
}
