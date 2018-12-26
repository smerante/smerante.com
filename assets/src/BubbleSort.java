
//moves largest element to the end of the list, and continues from the start
public class BubbleSort {

	public static <T extends Comparable<T>>void sort(T[] list)
	{
		for(int end = list.length-1; end > 0; end--)
		{
			for(int i = 0; i < end; i++)
			{
				if(list[i].compareTo(list[i+1]) >= 0)
				{
					T t = list[i+1];
					list[i+1] = list[i];
					list[i] = t;
				}
			}
		}
	}
}
