
//On each iteration, the next key in the left sublist are not the 
//smallest keys in the input list, but the first key in the input list
//inserted in the right order

public class InsertionSort {
	public static <T extends Comparable<T>>void sort(T[] list)
	{
		for(int i =1; i < list.length; i++)
		{
			int j = i;
			T key = list[j];//selects a key to sort in the list 1..i
			while(j > 0 && list[j-1].compareTo(key) > 0)
			{//while a key in the i list is greater than key shift it forward
				list[j] = list[j-1];	// move greater element forward one
				j=j-1;	//move int j left with the key
			}
			list[j] = key; //insert key to the right list position
		}
	}
}
