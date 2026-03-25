import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { httpResource } from '@angular/common/http';

export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Siaara Store');
  protected readonly shouldFetch = signal(false);
  
  protected readonly productsResource = httpResource<Product[]>(() => 
    this.shouldFetch() ? 'https://node-with-ai.azurewebsites.net/api/products' : undefined
  );

  loadProducts() {
    this.shouldFetch.set(true);
  }
}
