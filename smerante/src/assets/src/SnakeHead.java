import java.awt.Color;
import java.awt.Graphics;
import java.awt.Rectangle;


public class SnakeHead {
	Rectangle head;
	float x,y,dx,dy,size;
	int LEFT = 0, RIGHT = 1, UP = 2, DOWN = 3;
	int direction;
	public SnakeHead(){
		head = new Rectangle(400,400,10,10);
		direction = -1;
		x = 400;
		y = 400;
		Main.snake.clear();
		Main.snake.add(head);
		size=1;
		
	}
	public void paint(Graphics g){
		/*Font f = new Font(Font.SANS_SERIF,Font.BOLD,50);
		g.setFont(f);
		g.setColor(Color.white);
		g.drawString(""+(int)size, 20, 50);*/
		for(int i=Main.snake.size()-1; i >= 0 ;i--){
			if(i==0)
				g.setColor(Color.RED);
			else
				g.setColor(Color.WHITE);
			Rectangle temp =  Main.snake.get(i);
			g.fillRect(temp.x, temp.y, temp.width, temp.height);
		}
	}
	public void add(){
		for(int i = 0; i < 10; i++){
			Main.snake.add(new Rectangle(Main.snake.get(Main.snake.size()-1).x,Main.snake.get(Main.snake.size()-1).y,10,10));
			size++;
		}
	}
	public void update(){
		
		for(int i=Main.snake.size()-1; i > 0; i--){
			Main.snake.get(i).x = Main.snake.get(i-1).x;
			Main.snake.get(i).y = Main.snake.get(i-1).y;
		}
			
		x+=dx;
		y+=dy;
		if(x > 725)x=35;
		if(x<25)x=725;
		if(y>725)y=30;
		if(y<20)y=715;
		head.x = (int)(x - (x%15));
		head.y = (int)(y - (y%15));
		
		
		for(int i=Main.snake.size()-1; i > 4; i--){
			if(size > 10 && head != Main.snake.get(i) && Main.snake.get(i).intersects(head)){
				head = new Rectangle(400,400,10,10);
				direction = -1;
				x = 400;
				y = 400;
				Main.snake.clear();
				Main.snake.add(head);
				size = 1;
			}
		}
	}
}
