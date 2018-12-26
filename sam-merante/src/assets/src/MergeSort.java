

public class MergeSort {
	
	public static int[] sort(int[] list)
	{
		if(list.length <= 1)
			return list;
		
		int[] left = split(list,0, list.length/2);
		int[] right = split(list,list.length/2,list.length);
		
		int[] sortedL = sort(left);
		int[] sortedR = sort(right);
		list = merge(sortedL,sortedR);
		return merge(sortedL,sortedR);
	}

	private static int[] merge(int[] l1, int[] l2)
	{
		int[] merged = new int[l1.length+l2.length];
		int i =0, j = 0, k = 0;
		while( i < l1.length && j < l2.length)
		{
			if(l1[i]<l2[j])
			{
				merged[k] = l1[i];
				i++;
				k++;
			}
			else
			{
				merged[k] = l2[j];
				j++;
				k++;
			}
		}
		while(i < l1.length)
		{
			merged[k] = l1[i];
			i++;
			k++;
		}
		while(j < l2.length)
		{
			merged[k] = l2[j];
			j++;
			k++;
		}
		return merged;
	}
	private static int[] split(int[] t, int p, int q)
	{
		
		int[] r = new int[(q-p)];
		int start = 0;
		for(int i =p; i < q; i++)
		{
			r[start] = t[i];
			start++;
		}
		return r;
	}
}
