import java.util.Iterator;
import java.util.LinkedList;


//Implemented with a List of vertices, along with lists of edges 
public class MyGraph<V , E> {
	private class Vertex
	{
		V vertex;
		LinkedList<E> incommingEdges,outgoingEedges;
		public Vertex(V v)
		{
			vertex = v;
			incommingEdges = new LinkedList<E>();
			outgoingEedges = new LinkedList<E>();
		}
	}
	private LinkedList<Vertex> vertexes;
	public MyGraph()
	{
		vertexes = new LinkedList<Vertex>();
	}
	
	public LinkedList<E> incomingEdges(V v)
	{
		if(hasVertex(v))
		{
			Iterator<Vertex> it = vertexes.iterator();
			while(it.hasNext())
			{
				Vertex vertex = it.next();
				if(vertex.vertex.equals(v))
				{
					return vertex.incommingEdges;
				}
			}
		}
		
		return null;
	}
	public LinkedList<E> outgoingEdges(V v)
	{
		if(hasVertex(v))
		{
			Iterator<Vertex> it = vertexes.iterator();
			while(it.hasNext())
			{
				Vertex vertex = it.next();
				if(vertex.vertex.equals(v))
				{
					return vertex.outgoingEedges;
				}
			}
		}
		
		return null;
	}
	
	public E getEdge(V v, V u)
	{
		if(hasVertex(v) && hasVertex(u))
		{
			Iterator<Vertex> vit = vertexes.iterator();
			while(vit.hasNext())
			{
				Vertex vertex = vit.next();
				if(vertex.vertex.equals(v))
					{
					Iterator<Vertex> vit2 = vertexes.iterator();
					while(vit2.hasNext())
					{
						Vertex vertex2 = vit2.next();
						if(vertex2.vertex.equals(u))
							{ // found vertex v and u
								Iterator<E> outEdges = vertex.outgoingEedges.iterator();
								while(outEdges.hasNext())
								{
									E e = outEdges.next();
									Iterator<E> inEdges = vertex2.incommingEdges.iterator();
									while(inEdges.hasNext())
									{
										E e2 = inEdges.next();
										if(e.equals(e2))
										{
											return e;
										}
									}
								}
							}
					}
					}
			}
		}
		return null;
	}
	public boolean insertVertex(V v)
	{
		Vertex ver = new Vertex(v);
		if(hasVertex(v))
		{
			return false;
		}
			vertexes.add(ver);
			return true;
		
	}
	
	public boolean insertEdge(V u, V v, E e)
	{
		if(hasVertex(u) && hasVertex(v))
		{
			Iterator<Vertex> it = vertexes.iterator();
			while(it.hasNext())
			{
				Vertex vertex = it.next();
				if(vertex.vertex.equals(u))
					vertex.outgoingEedges.add(e);
				
				if(vertex.vertex.equals(v))
					vertex.incommingEdges.add(e);
				
			}
			return true;
		}
		return false;
	}
	
	public boolean removeVertex(V v)
	{
		if(hasVertex(v))
		{
			Iterator<Vertex> it = vertexes.iterator();
			while(it.hasNext())
			{
				Vertex vertex = it.next();
				if(vertex.vertex.equals(v))
				{
					vertexes.remove(vertex);
					return true;
				}
			}
		}
		return false;
	}
	public boolean removeEdge(E e)
	{
		
			Iterator<Vertex> it = vertexes.iterator();
			boolean removed = false;
			while(it.hasNext())
			{
				Vertex vertex = it.next();
				if(vertex.incommingEdges.contains(e))
				{
					vertex.incommingEdges.remove(e);
					removed = true;
				}
				if(vertex.outgoingEedges.contains(e))
				{
					vertex.outgoingEedges.remove(e);
					removed = true;
				}
			}
		
		return removed;
	}
	private boolean hasVertex(V v)
	{
		if(!vertexes.isEmpty())
		{
			Iterator<Vertex> it = vertexes.iterator();
			while(it.hasNext())
			{
				if(it.next().vertex.equals(v))
					return true;
			}
			return false;
		}
		else
			return false;
	}
}
