Feature: Pasar parametros para multiples escenarios

  Esto es una Demo de como pasar parametros a las definiciones

  Scenario Outline: Scenario Outline name: multiples escenarios
    Given Abrir el navegador principal
    When Cargando el nombre "<username>"
    And Cargando el email "<email>"
    And Cargando la dirección 1 "<dir1>"
    And Cargando la dirección 2 "<dir2>"
    And Clic en botón Submit
    Then Validar el nombre de la página

    Examples:
      | username | email            | dir1        | dir2        |
      | Ana      | ana@pruebas.com  | Dirección23 | Dirección24 |
      | Juan     | Juan@pruebas.com | Dirección21 | Dirección22 |
      | Pepe     | pepe@pruebas.com | Dirección20 | Dirección25 |