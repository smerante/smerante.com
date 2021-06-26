import java.lang.reflect.Array;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

// O(n) - to add
// O(n) - to remove
// O(1) - to retrieve item
public class MyArrayList<E extends Comparable<E>> {

	private Object[] array;
	private int internalSize,startI,endI;
	public int size;
	
	public MyArrayList()
	{
		internalSize = 2;
		startI = 0;
		endI = 0;
		size = 0;
		array  = new Object[internalSize];
	}
	
	public boolean add(E arg0) {
		// TODO Auto-generated method stub
		if(size > (internalSize - 1))
		{
			Object[] oldArray = array;
			array = new Object[internalSize*2];
			for(int i =0; i < internalSize; i++)
				array[i] = oldArray[i];
			
			internalSize*=2;
			array[endI++] = arg0;
			size++;
			return true;
		}
		else
		{
			array[endI++] = arg0;
			size++;
		}
		return false;
	}

	
	public void add(int i, E e) {
		if(i < 0 || i > size())
		{
			System.out.println("Index Out Of Bounds");
			return;
		}
		
		if(size > (internalSize - 1))
		{
			Object[] oldArray = array;
			array = new Object[internalSize*2];
			for(int j =0; j < internalSize; j++)
				array[j] = oldArray[j];

			//System.out.println("re-adjust size of array");
			internalSize*=2;
		}
		
		if(array[i] == null)
		{
			array[i] = e;
			size++;
			if(endI == i)endI++;
		//	System.out.println("Added to empty spot");
		}
		else
		{//array at i has an element already
			//System.out.println("Adding to taken spot");
			
			if((size+1) > (internalSize - 1))
			{
				Object[] oldArray = array;
				array = new Object[internalSize*2];
				for(int j =0; j < internalSize; j++)
					array[j] = oldArray[j];

			//	System.out.println("re-adjust size of array");
				internalSize*=2;
			}
			//shift everything over
		//	System.out.println("Shfting from "+(i +(endI-i)) +" to "+ i);
			for(int j = i +(endI-i); j > i; j--)
				array[j+1] = array[j];
			
			array[i] = e;
			endI++;
			size++;
			
		}
		
		
	}

	
	public boolean addAll(Collection<? extends E> arg0) {
		// TODO Auto-generated method stub
		return false;
	}

	
	public boolean addAll(int arg0, Collection<? extends E> arg1) {
		// TODO Auto-generated method stub
		return false;
	}

	
	public void clear() {
		internalSize = 2;
		startI = 0;
		endI = 0;
		size = 0;
		array  = new Object[internalSize];
	}

	
	public boolean contains(Object arg0) {
		for(int i = 0; i < size; i ++)
			if(array[i].equals(arg0))
				return true;
		return false;
	}

	
	public boolean containsAll(Collection<?> arg0) {
		// TODO Auto-generated method stub
		return false;
	}

	
	@SuppressWarnings("unchecked")
	public E get(int i) {
		// TODO Auto-generated method stub
		if(i < 0 || i > size)
		{
			System.out.println("Index Out Of Bounds");
			return null;
		}
		return (E)array[i];
	}

	
	public int indexOf(Object e) {
		int index = -1;
		for(int i = 0; i < size; i++)
			if(array[i].equals(e))
				index = i;
		//System.out.println(e +" : "+index);
		return index;
	}

	
	public boolean isEmpty() {
		if(size == 0)
			return true;
		return false;
	}

	
	public Iterator<E> iterator() {
		// TODO Auto-generated method stub
		return null;
	}

	
	public int lastIndexOf(Object arg0) {
		// TODO Auto-generated method stub
		return 0;
	}

	
	public ListIterator<E> listIterator() {
		// TODO Auto-generated method stub
		return null;
	}

	
	public ListIterator<E> listIterator(int arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	
	public boolean remove(Object e) {
		// TODO Auto-generated method stub
		int indexToRemove = indexOf(e);
		if(indexToRemove != -1)
		{
				for(int i = indexToRemove; i < size; i++)
					array[i] = array[i+1];
			endI --;
			size --;
				return true;
		}
		return false;
	}

	
	public E remove(int i) {
		// TODO Auto-generated method stub
		E ret = (E) get(i);
		int indexToRemove = indexOf(get(i));
		if(indexToRemove != -1)
		{
			for(int j = indexOf(get(i));j < size; j++)
				array[j] = array[j+1];
			size--;
			endI--;
			return ret;
		}
		return null;
	}

	
	public boolean removeAll(Collection<?> arg0) {
		// TODO Auto-generated method stub
		return false;
	}

	
	public boolean retainAll(Collection<?> arg0) {
		// TODO Auto-generated method stub
		return false;
	}

	
	public E set(int arg0, E arg1) {
		// TODO Auto-generated method stub
		return null;
	}

	
	public int size() {
		// TODO Auto-generated method stub
		return size;
	}

	
	public List<E> subList(int arg0, int arg1) {
		// TODO Auto-generated method stub
		return null;
	}

	
	public Object[] toArray() {
		// TODO Auto-generated method stub
		return null;
	}

	
	public <T> T[] toArray(T[] arg0) {
		// TODO Auto-generated method stub
		return null;
	}

}
