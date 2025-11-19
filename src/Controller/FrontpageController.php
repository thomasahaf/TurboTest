<?php

namespace App\Controller;

use App\Entity\Book;
use App\Form\BookType;
use App\Repository\BookRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Notifier\Message\DesktopMessage;
use Symfony\Component\Notifier\TexterInterface;
use Symfony\Component\Notifier\Bridge\JoliNotif\JoliNotifOptions;

#[Route('/', name: 'frontpage')]
class FrontpageController extends AbstractController{

    #[Route(name: 'app_frontpage_index', methods: ['GET'])]
    public function index(): Response
    {
        return $this->render('frontpage/frontpage.html.twig', [

        ]);
    }
}
