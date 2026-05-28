import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { ContentMain } from "../../components/content-main/content-main";
import { ContentSobre } from "../../components/content-sobre/content-sobre";

@Component({
  selector: 'app-sobre',
  imports: [Header, Footer, ContentMain, ContentSobre],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {}
