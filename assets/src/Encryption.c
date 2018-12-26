/*
 ============================================================================
 Name        : HelloWorld.c
 Author      : Sam Merante
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
	FILE *file,*newFile;
	int key = argv[2];
	file = fopen(argv[1], "r");
	char *newName = malloc(strlen(argv[1])+strlen("new.txt")+1);
	strcpy(newName,argv[1]);
	strcat(newName,"new.txt");
	newFile = fopen(newName,"w");
	if(file)
	{
		printf("Read file: %s\n", argv[1]);
		printf("Encrypting File\n");
		int ch = 0;
		while((ch = getc(file))!= EOF)
		{
			int nc = ch ^ key;
			fputc(nc,newFile);
		}
		printf("Done encrypting\n");
	}
	else{
		printf("Did not reed file %s",argv[1]);
	}
	fclose(file);
	fclose(newFile);
	return EXIT_SUCCESS;
}

