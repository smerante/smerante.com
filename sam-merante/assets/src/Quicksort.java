
public class Quicksort {
	public static int[] sort(int[] list)
	{
		if(list.length <= 1)
			return list;
		int p = (int)Math.floor(Math.random()*list.length);
		int pivot = list[p];
		int[] L = sortLess(list,pivot);
		int[] E = sortEqual(list,pivot);
		int[] G = sortGreater(list,pivot);
		
		int[] SL = sort(L);
		int[] SG = sort(G);
		int[] S = new int[(SL.length + E.length + SG.length)];
		
		int i = 0;
		int q = 0;
		while(i < SL.length)
		{
			S[i] = SL[q];
			i++;
			q++;
		}
		q = 0;
		while(q < E.length)
		{
			S[i] = E[q];
			i++;
			q++;
		}
		q = 0;
		while(q < SG.length)
		{
			S[i] = SG[q];
			i++;
			q++;
		}
		return S;
	}
	
	private static int[] sortLess(int[] list, int pivot)
	{
		
		int[] r = new int[list.length];
		int less = 0;
		
		for(int i = 0; i < list.length; i++)
		{
			if(list[i] < pivot)
			{
				r[less] = list[i];
				less++;
			}
		}
		int[] ret = new int[less];
		for(int i = 0; i < less; i++)
		{
				ret[i] = r[i];
		}
		return ret;
		
	}
	private static int[] sortGreater(int[] list, int pivot)
	{
		
		int[] r = new int[list.length];
		int greater = 0;
		
		for(int i = 0; i < list.length; i++)
		{
			if(list[i] > pivot)
			{
				r[greater] = list[i];
				greater++;
			}
		}
		int[] ret = new int[greater];
		for(int i = 0; i < greater; i++)
		{
				ret[i] = r[i];
		}
		return ret;
	}
	private static int[] sortEqual(int[] list, int pivot)
	{
		
		int[] r = new int[list.length];
		int equal = 0;
		
		for(int i = 0; i < list.length; i++)
		{
			if(list[i] == pivot)
			{
				r[equal] = list[i];
				equal++;
			}
		}
		int[] ret = new int[equal];
		for(int i = 0; i < equal; i++)
		{
				ret[i] = r[i];
		}
		return ret;
	}
}
