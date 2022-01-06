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
                    <h2>Vacinas</h2>
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
                            <th class="column-title">Nome </th>
                            <th class="column-title">Fabricante </th>
                            <th class="column-title">País </th>
                            <th class="column-title">Doses </th>
                            <th class="column-title no-link last"><span class="nobr">Editar</span>
                            <th class="column-title no-link last"><span class="nobr">Excluir</span>
                            </th>
                            <th class="bulk-actions" colspan="7">
                              <a class="antoo" style="color:#fff; font-weight:500;">Bulk Actions ( <span class="action-cnt"> </span> ) <i class="fa fa-chevron-down"></i></a>
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                        @foreach($vacinas as $v)
                          <tr class="odd pointer">
                            
                            <td> {{ $v->id }} </td>
                            <td> {{ $v->nome }} </td>
                            <td> {{ $v->fabricante }} </td>
                            <td> {{ $v->país }} </td>
                            <td> {{ $v->doses }} </td>
                            <td class=" last"><a href="">Editar</a></td>
                            <td class=" last">
                            <form name="frmDelete" action="{{ route('vacinas.destroy', $v->id)}}" method="post" onsubmit="return confirm('Confirma a exclusão da vacina?');">
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
