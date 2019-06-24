package samM;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.ArrayList;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.Timer;

public class Window extends JPanel implements KeyListener, ActionListener {

	Timer t;
	Circle mC,c;
	float vX, vY,v2X,v2Y;
	public Window()
	{
		super.setSize(1920, 1080);
		super.setFocusable(true);
		super.setFocusTraversalKeysEnabled(true);
		super.addKeyListener(this);
		
		mC = new Circle(900,400,100);
		c = new Circle(400,399,60);
		vX = vY = v2X = v2Y = 0;
		v2X = 1;
		t = new Timer(16,this);
		t.start();
	}
	public static void main(String[] args) {
		JFrame frame = new JFrame("Circle collider Test");
		frame.add(new Window());
		frame.setSize(1920, 1080);
		frame.setVisible(true);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}

	@Override
	public void paintComponent(Graphics g)
	{
		g.setColor(Color.BLACK);
		g.fillRect(0, 0, 1920, 1080);
		mC.draw(Color.white, g);
		c.draw(Color.green,g);

			
		
	}
	boolean collided(Circle c1, Circle c2)
	{
		//Euclidean distance
		float distance = (float) Math.sqrt((c1.x-c2.x)*(c1.x-c2.x) + (c1.y-c2.y)*(c1.y-c2.y));
		
		if(distance < (c1.radius+c2.radius))
			return true;
		return false;
	}
	
	//Pushes src Circle away from other Circle
	public void pushFrom(Circle src, Circle other)
	{
		float xDist = src.x - other.x;
		float yDist = src.y - other.y;
		
		float actualDistance = (float)Math.sqrt(xDist*xDist + yDist*yDist);
		if(actualDistance >= (src.radius+other.radius))
			return;
		
		//Desired distance is one pixel away
		float desiredDistance = (src.radius+other.radius)+1;
		//get the ratio between the two circles
		float proportion = desiredDistance/actualDistance;
		//Move the distance away acording to the ratio
		xDist *= proportion;
		yDist *= proportion;
		
		//The bigger circle pushes the smaller circle
		if(src.radius >= other.radius)
		{
			other.x = src.x - xDist;
			other.y = src.y - yDist;
		}
		else
		{
			src.x = other.x + xDist;
			src.y = other.y + yDist;
			
		}
	}
	@Override
	public void actionPerformed(ActionEvent arg0) {	
		updateCircleCollision();
		updateCircle();
		repaint();
	}
	public void updateCircleCollision()
	{
		if(collided(mC,c))
			pushFrom(mC,c);
	}
	public void updateCircle()
	{
		mC.x += vX*3;
		mC.y += vY*3;
		c.x += v2X*3;
		c.y += v2Y*3;
	}

	@Override
	public void keyPressed(KeyEvent e) {
		if(e.getKeyCode() == KeyEvent.VK_A)
			vX = -5;
		if(e.getKeyCode() == KeyEvent.VK_D)
			vX = 5;
		if(e.getKeyCode() == KeyEvent.VK_W)
			vY = -5;
		if(e.getKeyCode() == KeyEvent.VK_S)
			vY = 5;
		if(e.getKeyCode() == KeyEvent.VK_LEFT)
			v2X = -5;
		if(e.getKeyCode() == KeyEvent.VK_RIGHT)
			v2X = 5;
		if(e.getKeyCode() == KeyEvent.VK_UP)
			v2Y = -5;
		if(e.getKeyCode() == KeyEvent.VK_DOWN)
			v2Y = 5;
	}

	@Override
	public void keyReleased(KeyEvent e) {
		if(e.getKeyCode() == KeyEvent.VK_A)
			vX = 0;
		if(e.getKeyCode() == KeyEvent.VK_D)
			vX = 0;
		if(e.getKeyCode() == KeyEvent.VK_W)
			vY = 0;
		if(e.getKeyCode() == KeyEvent.VK_S)
			vY = 0;
		if(e.getKeyCode() == KeyEvent.VK_LEFT)
			v2X = 0;
		if(e.getKeyCode() == KeyEvent.VK_RIGHT)
			v2X = 0;
		if(e.getKeyCode() == KeyEvent.VK_UP)
			v2Y = 0;
		if(e.getKeyCode() == KeyEvent.VK_DOWN)
			v2Y = 0;
		
	}

	@Override
	public void keyTyped(KeyEvent arg0) {
		
	}

}
