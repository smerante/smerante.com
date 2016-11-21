
//Average O(1) Put, get, find
//Worst O(n) put,get,find
//MyHashMap is non resizable and does not check for similair keys
//Dictonaries are the same as HashMap but can store multiple of the same key in lists in each array index


public class MyHashMap<K extends Comparable<K>, V> {

	class Entry{
		K key;
		V value;
		public Entry(K k ,V v)
		{
			key = k;
			value = v;
		}
	}
	private Object[] table;
	private int size, elements;
	
	public MyHashMap()
	{
		size = 10;
		table = new Object[size];
		elements = 0;
	}
	public MyHashMap(int s)
	{
		size = s;
		table = new Object[size];
		elements = 0;
	}
	
	public void put(K key, V value)
	{
		Entry e = new Entry(key,value);
		K x = e.key;
		if(elements < size)
		{
			if(table[h(x)] == null)
			{
				table[h(x)] = e;
			}
			else
			{
				int p = (h(x)+1)%size;
				int q = 0;
				while(q < size)
				{
					if(table[p]!=null)
					{
						q++;
						p=(p+1) % size;
					}
					else
						table[p] = e;
				}
			}
		}
	}
	public V getVal(K key)
	{
		if(table[h(key)] != null)
		{
			Entry e = (Entry)table[h(key)];
			if(e.key.equals(key))
			{
				return e.value;
			}
			else
			{
				int p = (h(key)+1)%size;
				int q = 0;
				while(q < size)
				{
					if(table[p]!=null)
					{
						Entry e2 = (Entry)table[p];
						if(e2.key.equals(e.key))
							return e2.value;
						else
							q++;
					}
					else
						q++;
					p=(p+1) % size;
				}
			}
		}
		return null;
	}
	public K getKey(V value)
	{
		
		int p = 0;
		int q = 0;
		while(q < size)
		{
			if(table[p]!=null)
			{
				Entry e = (Entry)table[p];
				if(e.value.equals(value))
					return e.key;
				else
					q++;
			}
			else
				q++;
			p=(p+1) % size;
		}
		return null;
	}
	
	private int h(Object x)
	{
		return x.hashCode()%size;
	}
}
