// finds the smallest element in the input list and moves it to output list
//then finds the next smallest elmnt
//0 to i-1 contains sorted order keys
// i..n-1 contains remaining keys
public class SelectionSort {
	
	public static <T extends Comparable<T>>void sort(T[] list)
	{
		int i = 0; //min cuttOff
		T min = list[0];
		int minJ = 0;
		for(int j = i+1; j < list.length; j++)
		{
			if(min.compareTo(list[j])>0)
			{ //if min is greater than the next element swap so min is the smaller elmt
				min = list[j];
				minJ = j;
			}
			if(j == list.length -1)
			{//if done looking swap smallest elmt
				//System.out.println("smallest elm :"+list[minJ]);
				//Swap smallest elmt to front
				T t = list[i];
				list[i] = list[minJ];
				list[minJ] = t;
				//Swap smallest elmt to front
				
				i++; //increase lists sorted elements
				j = i; //reset j
				min = list[i]; // reset min
				minJ = i; //reset minJ
				
			}
		}
	}
}
