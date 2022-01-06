@extends('principal')

@section('conteudo')
@csrf

        <!-- page content -->
        <div class="right_col" role="main">
          <div class="">
            <div class="page-title">
              <div class="title_left">
                <h3></h3>
              </div>

              
              <div class="clearfix"></div>

              <div class="col-md-12 col-sm-12  ">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>Registros</h2>
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>

                  <div class="x_content">


                    <div class="table-responsive">
                      <table class="table table-striped jambo_table bulk_action">
                        <thead>
                          <tr class="headings">
                            
                            <th class="column-title">Id </th>
                            <th class="column-title">Pessoa </th>
                            <th class="column-title">Unidade </th>
                            <th class="column-title">Vacina </th>
                            <th class="column-title">Dose </th>
                            <th class="column-title">Data Aplicação </th>
                            <th class="column-title no-link last"><span class="nobr">Editar</span>
                            <th class="column-title no-link last"><span class="nobr">Excluir</span>
                            </th>
                            <th class="bulk-actions" colspan="7">
                              <a class="antoo" style="color:#fff; font-weight:500;">Bulk Actions ( <span class="action-cnt"> </span> ) <i class="fa fa-chevron-down"></i></a>
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          @foreach($registros as $r)
                          <tr class="odd pointer">
                            
                            <td> {{ $p->id }} </td>
                            <td> {{ $p->pessoa_id }} </td>
                            <td> {{ $p->unidade_id }} </td>
                            <td> {{ $p->vacina_id }} </td>
                            <td> {{ $p->dose }} </td>
                            <td> {{ $p->dat_aplic }} </td>
                            <td class=" last"><a href="{{ route('registros.edit', $r) }}">Editar</a></td>
                            <td class=" last">
                            <form name="frmDelete" action="{{ route('registros.destroy', $r->id)}}" method="post" onsubmit="return confirm('Confirma a exclusão da vacina?');">
                              @csrf
                              @method('DELETE')
                              <input type="submit" value="Excluir" style="border: none; background-color: #f2f2f2; color: #5e8ec6">
                            </form>
                            </td>
                            
                          </tr>
                          @endforeach
                        </tbody>
                      </table>
                    </div>
							
						
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /page content -->


@endsection
